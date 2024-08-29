import React, { createContext, useState, useContext } from "react";
import { initialTasks } from "./data";

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);

  const updateTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const getTasksByStatus = (isCompleted) => {
    return tasks.filter((task) => task.isCompleted === isCompleted);
  };

  return (
    <TasksContext.Provider value={{ tasks, updateTask, getTasksByStatus }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}
