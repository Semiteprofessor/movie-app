export const Search = ({ query, setQuery }) => {
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
