import { useState } from 'react';
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const products = useSelector((state) => state.products.items); // Assuming you have a `products` slice

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="p-4">
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
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Search
        </button>
      </div>

      {/* Display search results */}
      <div className="mt-4">
        {results.length > 0 ? (
          <ul>
            {results.map((product) => (
              <li key={product.id} className="border p-2 mt-2 rounded-md">
                {product.name} - ${product.price}
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
