import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

const App = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const products = useSelector((state) => state.products.items);

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div>
      <Navbar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <SearchBar query={query} setQuery={setQuery} results={results} handleSearch={handleSearch} />
    </div>
  );
};

export default App;
