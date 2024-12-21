import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(`tasks_${user}`)) || [];
      setTasks(storedTasks);
  },[user])

  const login = (username) => {
    setUser(username);
    localStorage.setItem('loggedInUser', username);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('loggedInUser');
  };

  const saveTasks = (updatedTasks) => {
    setTasks(updatedTasks);
    if (user) {
      localStorage.setItem(`tasks_${user}`, JSON.stringify(updatedTasks));
    }
  };

  return (
    <AppContext.Provider value={{ user, tasks, setTasks: saveTasks, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};
