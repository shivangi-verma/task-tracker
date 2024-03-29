import React, { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskColumn from "../components/TaskColumn";
import Filter from "./Filter";
import Sort from "./Sort";

const Home = () => {
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const [rerenderFlag, setRerenderFlag] = useState(false);
  useEffect(() => {}, [rerenderFlag]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    team: "",
    assignee: "",
    priority: "",
  });
  const [tasks, setTasks] = useState({
    pending: [],
    inProgress: [],
    completed: [],
    deployed: [],
    deferred: [],
  });
  const [selectedPriority, setSelectedPriority] = useState("");

  const toggleAddTaskForm = () => {
    setShowAddTaskForm(!showAddTaskForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSort = (priority) => {
    setSelectedPriority(priority);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date(); // Get current date
    const startDate = currentDate.toISOString().slice(0, 10); // Format date as YYYY-MM-DD
    const newTask = {
      title: formData.title,
      description: formData.description,
      team: formData.team,
      assignee: formData.assignee,
      priority: formData.priority,
      status: "pending",
      startDate: startDate, // Assigning start date
    };
    setTasks({
      ...tasks,
      pending: [...tasks.pending, newTask],
      inProgress: [...tasks.inProgress],
      completed: [...tasks.completed],
      deployed: [...tasks.deployed],
      deferred: [...tasks.deferred],
    });
    setFormData({
      title: "",
      description: "",
      team: "",
      assignee: "",
      priority: "",
    });
    toggleAddTaskForm();
  };

  return (
    <>
      <div className="p-4">
        <Filter
          tasks={tasks}
          rerenderFlag={rerenderFlag}
          setRerenderFlag={setRerenderFlag}
        />
        <Sort handleSort={handleSort} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6"
          onClick={toggleAddTaskForm}
        >
          Add task
        </button>
        {showAddTaskForm && (
          <TaskForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            toggleAddTaskForm={toggleAddTaskForm}
          />
        )}
        <TaskColumn
          tasks={tasks}
          setTasks={setTasks}
          selectedPriority={selectedPriority}
          rerenderFlag={rerenderFlag}
          setRerenderFlag={setRerenderFlag}
        />
      </div>
    </>
  );
};

export default Home;
