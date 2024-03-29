import React from "react";

const Sort = ({ handleSort }) => {
  const handleChange = (e) => {
    const selectedPriority = e.target.value;
    // Call the handleSort function passed from the parent component
    handleSort(selectedPriority);
  };

  return (
    <>
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2 font-bold">
          Sort by:
        </label>
        <select
          id="sort"
          className="p-2 pr-8 border rounded"
          onChange={handleChange}
        >
          <option value="">Select Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>
      </div>
    </>
  );
};

export default Sort;
