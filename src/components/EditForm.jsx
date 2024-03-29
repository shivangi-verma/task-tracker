import React from "react";

const EditForm = ({
  task,
  editedStatus,
  editedPriority,
  setEditedStatus,
  setEditedPriority,
  handleEditSubmit,
  handleEditCancel,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <p className="text-3xl mb-4 font-bold">Edit Task</p>
        <div className="mb-4">
          <label htmlFor="title" className="font-bold mb-1 block">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={task.title}
            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none"
            placeholder="Task Title"
            disabled
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="font-bold mb-1 block">
            Description:
          </label>
          <textarea
            id="description"
            value={task.description}
            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none"
            placeholder="Task Description"
            disabled
          />
        </div>
        <div className="mb-4">
          <label htmlFor="team" className="font-bold mb-1 block">
            Team:
          </label>
          <input
            type="text"
            id="team"
            value={task.team}
            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none"
            placeholder="Team"
            disabled
          />
        </div>
        <div className="mb-4">
          <label htmlFor="assignee" className="font-bold mb-1 block">
            Assignee:
          </label>
          <input
            type="text"
            id="assignee"
            value={task.assignee}
            className="border border-gray-300 p-2 rounded-md w-full focus:outline-none"
            placeholder="Assignee"
            disabled
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="font-bold mb-1 block">
            Status:
          </label>
          <select
            id="status"
            value={editedStatus}
            onChange={(e) => setEditedStatus(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mb-4 border p-2"
          >
            <option value="" disabled hidden>
              Select status
            </option>
            <option value="pending">Pending</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="deployed">Deployed</option>
            <option value="deferred">Deferred</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="priority" className="font-bold mb-1 block">
            Priority:
          </label>
          <select
            id="priority"
            value={editedPriority}
            onChange={(e) => setEditedPriority(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 mb-4 border p-2"
          >
            <option value="" disabled hidden>
              Select priority
            </option>
            <option value="P0">P0</option>
            <option value="P1">P1</option>
            <option value="P2">P2</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={handleEditSubmit}
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            onClick={handleEditCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
