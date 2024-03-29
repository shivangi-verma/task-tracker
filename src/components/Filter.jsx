import React from "react";

const Filter = ({ tasks, setRerenderFlag, rerenderFlag }) => {
  const handleType = (e) => {
    console.log("tasks =", tasks);

    const assignees = Object.values(tasks).flatMap((taskList) =>
      taskList.map((task) => task.assignee)
    );

    const val = e.target.value;
    const newArray = assignees.filter((item) => {
      if (item.includes(val)) {
        console.log(item);
        setRerenderFlag(true);
      }
    });
  };
  return (
    <>
      <div className="py-4 px-2 rounded-md flex flex-col sm:flex-row items-center">
        <label htmlFor="filter" className="mr-2 mb-2 sm:mb-0">
          Filter By:
        </label>

        <input
          type="text"
          placeholder="Assignee Name"
          className="border rounded-md px-2 py-1 mr-4"
          onChange={handleType}
        />

        <select className="border rounded-md px-2 py-1 mr-4">
          <option value="">Select Priority</option>
          <option value="P0">P0</option>
          <option value="P1">P1</option>
          <option value="P2">P2</option>
        </select>

        <label htmlFor="start_date" className="mr-2 mb-2 sm:mb-0">
          Start Date:
        </label>
        <input
          type="date"
          id="start_date"
          className="border rounded-md px-2 py-1 mr-4"
        />

        <label htmlFor="end_date" className="mr-2 mb-2 sm:mb-0">
          End Date:
        </label>
        <input
          type="date"
          id="end_date"
          className="border rounded-md px-2 py-1 mr-4"
        />
      </div>
    </>
  );
};

export default Filter;
