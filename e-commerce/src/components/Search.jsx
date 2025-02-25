import { useState } from "react";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Get products from Redux store
  const products = useSelector((state) => state.products.items); 

  // Handle search function
  const handleSearch = () => {
    if (!query.trim()) return; // Prevent empty searches

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredProducts);
  };

  return (
    <div className="p-4">
      {/* Search Input */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Display Search Results */}
      <div className="mt-4">
        {results.length > 0 ? (
          <ul>
            {results.map((product) => (
              <li key={product.id} className="border p-2 mt-2 rounded-md">
                <strong>{product.name}</strong> - ${product.price} 
                <br />
                <span className="text-gray-600">{product.category}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
