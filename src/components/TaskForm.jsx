import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const TaskForm = ({
  formData,
  handleInputChange,
  handleSubmit,
  toggleAddTaskForm,
}) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold mb-4">Create a New Task</h2>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={toggleAddTaskForm}
              className="text-gray-500 cursor-pointer hover:text-black text-2xl"
            />
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              placeholder="Title"
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
            <textarea
              name="description"
              value={formData.description}
              placeholder="Description"
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name="team"
              value={formData.team}
              placeholder="Team"
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="text"
              name="assignee"
              value={formData.assignee}
              placeholder="Assignee"
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            />
            <select
              name="priority"
              value={formData.priority}
              onChange={handleInputChange}
              className="w-full border rounded-md px-3 py-2"
            >
              <option value="">Select Priority</option>
              <option value="P0">P0</option>
              <option value="P1">P1</option>
              <option value="P2">P2</option>
            </select>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
