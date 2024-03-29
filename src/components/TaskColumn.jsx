import React, { useState, useEffect } from "react";
import Task from "../components/Task";

const TaskColumn = ({
  tasks,
  setTasks,
  selectedPriority,
  rerenderFlag,
  setRerenderFlag,
}) => {
  // const [rerenderFlag, setRerenderFlag] = useState(false);

  // useEffect(() => {}, [rerenderFlag]);

  const sortByPriority = (taskList) => {
    return taskList.slice().sort((a, b) => {
      return a.priority.localeCompare(b.priority);
    });
  };

  const renderTasks = (tasks, title) => {
    let allTasks = [];
    // Combine tasks from all columns into one array
    Object.values(tasks).forEach((column) => {
      allTasks = allTasks.concat(column);
    });

    let tasksToRender = allTasks;
    if (selectedPriority) {
      // Filter tasks based on selected priority
      tasksToRender = allTasks.filter(
        (task) => task.priority === selectedPriority
      );
    }

    // Separate tasks with selected priority and other tasks
    const selectedPriorityTasks = tasksToRender.filter(
      (task) => task.priority === selectedPriority
    );
    const otherTasks = tasksToRender.filter(
      (task) => task.priority !== selectedPriority
    );

    // Sort selected priority tasks alphabetically
    selectedPriorityTasks.sort((a, b) => a.title.localeCompare(b.title));

    // Concatenate selected priority tasks and other tasks
    tasksToRender = selectedPriorityTasks.concat(otherTasks);

    return (
      <div className="w-full sm:w-auto md:w-1/2 lg:w-1/3 xl:w-1/6 shadow-lg p-2 min-w-0 max-w-xs">
        <h1 className="text-xl font-bold text-center p-2 pb-6">{title}</h1>
        {tasksToRender.map((task, index) => (
          <Task
            key={index}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            rerenderFlag={rerenderFlag}
            setRerenderFlag={setRerenderFlag}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-wrap justify-around">
        {renderTasks(tasks.pending, "Pending")}
        {renderTasks(tasks.inProgress, "In Progress")}
        {renderTasks(tasks.completed, "Completed")}
        {renderTasks(tasks.deployed, "Deployed")}
        {renderTasks(tasks.deferred, "Deferred")}
      </div>
    </>
  );
};

export default TaskColumn;
