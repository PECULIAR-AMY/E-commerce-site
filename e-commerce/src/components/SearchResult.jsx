import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setResults, setLoading, setError } from "../features/searchSlice"; // ✅ Import from searchSlice

const CATEGORIES = {
    "mens-shirt": "mens-shirts",
    "womens-bag": "womens-bags",
    "womens-dresses": "womens-dresses",
    "mens-watch": "mens-watches",
    "womens-shoe": "womens-shoes",
    "mens-shoe": "mens-shoes"
};

function SearchResults() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q")?.toLowerCase();
    const dispatch = useDispatch();
    const { results, loading, error } = useSelector((state) => state.search); // ✅ Ensure you're selecting from `search`

    useEffect(() => {
        if (!query) return;

        dispatch(setLoading());

        const category = CATEGORIES[query] || query; // Match category or fallback to query
        const apiUrl = `https://dummyjson.com/products/category/${category}`;

        // ✅ Use AbortController to prevent memory leaks if the component unmounts
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(apiUrl, { signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then((data) => {
                if (data.products && data.products.length) {
                    dispatch(setResults(data.products));
                } else {
                    dispatch(setError("No products found in this category.")); 
                }
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    dispatch(setError(err.message));
                }
            });

        return () => controller.abort(); // ✅ Cleanup fetch request on unmount

    }, [query, dispatch]);
n
    return (
        <div className="p-5">
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {results.map((item) => (
                    <li key={item.id} className="border p-4 rounded-lg shadow-md">
                        <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            className="w-full h-40 object-cover rounded-md mb-2"
                        />
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-gray-500">Category: {item.category}</p>
                        <p className="text-gray-700 font-bold">${item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;
