const SortBy = ({ sortBy }) => {
  const onChange = (event) => {
    sortBy(event.target.value);
  };
  return (
    <div className="sortBy">
      <label htmlFor="sort">Sort by</label>
      <select onChange={onChange} id="sort">
        <option value="latest">Latest</option>
        <option value="low">Price: Low</option>
        <option value="high">Price: High</option>
      </select>
    </div>
  );
};

export default SortBy;
