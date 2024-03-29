import React, { useState } from "react";
import EditForm from "./EditForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task, tasks, setTasks, rerenderFlag, setRerenderFlag }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editedStatus, setEditedStatus] = useState(task.status);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDeleteConfirmation = () => {
    setShowDeleteConfirmation(!showDeleteConfirmation);
  };

  const handleEdit = () => {
    setEditMode(true);
    toggleMenu(); // Close the menu
  };

  const handleEditCancel = () => {
    setEditMode(false);
    // Reset edited values to original task values
    setEditedStatus(task.status);
    setEditedPriority(task.priority);
  };

  const handleEditSubmit = () => {
    // Update the task with edited values
    const updatedTask = {
      ...task,
      status: editedStatus,
      priority: editedPriority,
    };

    // Find the array corresponding to the task's status
    const taskArray = tasks[editedStatus]; // Use editedStatus here instead of task.status
    console.log("taskArray", taskArray);

    // If the status remains the same, just update the task
    if (editedStatus === task.status) {
      const updatedTasks = taskArray.map((t) => (t === task ? updatedTask : t));
      const updatedTasksObject = {
        ...tasks,
        [task.status]: updatedTasks,
      };
      setTasks(updatedTasksObject);
    } else {
      // If the status changes, remove the task from its previous column and add it to the new one
      const updatedTasksObject = {
        ...tasks,
        [task.status]: tasks[task.status].filter((t) => t !== task),
        [editedStatus]: [...taskArray, updatedTask],
      };
      setTasks(updatedTasksObject);
      setRerenderFlag(true);
    }

    // Exit edit mode
    setEditMode(false);
  };

  const handleDelete = () => {
    // Close the menu
    setShowMenu(false);

    // Check if the task status is not "completed"
    if (task.status !== "completed") {
      // Remove the task from the tasks array
      const filteredTasks = {
        ...tasks,
        pending: tasks.pending.filter((t) => t !== task),
        inProgress: tasks.inProgress.filter((t) => t !== task),
        completed: tasks.completed.filter((t) => t !== task),
        deployed: tasks.deployed.filter((t) => t !== task),
        deferred: tasks.deferred.filter((t) => t !== task),
      };
      setTasks(filteredTasks);
      // Close the confirmation modal
      toggleDeleteConfirmation();
    } else {
      // Task is completed, show an alert
      alert("Completed tasks cannot be deleted.");
    }
  };

  return (
    <div className="border rounded-lg shadow-md bg-white p-4 mb-4 relative">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
        <h3 className="text-lg font-bold mb-2 sm:mb-0">{task.title}</h3>
        <p className="text-sm p-1 px-2 font-bold text-white bg-gray-500 rounded-md">
          {task.priority}
        </p>
      </div>
      <div className="border-b border-gray-300 mb-2"></div>
      <p className="text-gray-600 mb-2">{task.description}</p>
      <div className="flex flex-col sm:flex-row items-center mb-2 justify-between">
        <p className="text-sm text-gray-500 mb-2 sm:mb-0">@{task.assignee}</p>
        <div className="relative">
          <FontAwesomeIcon
            className="text-gray-500 hover:text-black cursor-pointer"
            icon={faEllipsisV}
            onClick={toggleMenu}
          />
          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <button
                className="block w-full px-2 py-2 text-sm text-gray-800 hover:bg-gray-100"
                onClick={handleDelete}
              >
                Delete
              </button>{" "}
              <button
                className="block w-full px-2 py-2 text-sm text-gray-800 hover:bg-gray-100"
                onClick={handleEdit}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="text-sm p-2 mt-4 text-white bg-gray-600 rounded-sm">
        {task.status}
      </p>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-lg mb-4">
              Do you want to delete the "{task.title}" task?
            </p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 mr-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={handleDelete}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                onClick={toggleDeleteConfirmation}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Form */}
      {editMode && (
        <EditForm
          task={task}
          editedStatus={editedStatus}
          editedPriority={editedPriority}
          setEditedStatus={setEditedStatus}
          setEditedPriority={setEditedPriority}
          handleEditSubmit={handleEditSubmit}
          handleEditCancel={handleEditCancel}
        />
      )}
    </div>
  );
};

export default Task;
