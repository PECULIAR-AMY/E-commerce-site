import { useEffect, useState } from "react";

function Sunglasses() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products/category/womens-dresses");
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                
                const data = await res.json();
                setProducts(data.products);
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Failed to load products. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p className="text-center text-lg font-semibold">Loading products...</p>;
    if (error) return <p className="text-center text-red-500 font-semibold">{error}</p>;

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Women Category</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-40 object-cover rounded-lg"
                        />
                        <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
                        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
                        <p className="text-yellow-500 font-medium mt-1">⭐ {product.rating}</p>
                        <p className={`mt-2 font-semibold ${product.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                            {product.stock > 0 ? `In Stock: ${product.stock}` : "Out of Stock"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sunglasses;
