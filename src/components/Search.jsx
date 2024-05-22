import { useState } from "react";

export const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
