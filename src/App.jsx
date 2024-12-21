import React, { useContext } from 'react';
import { AppProvider, AppContext } from './context/AppContext';
import Login from './Pages/LoginPage';
import TaskManager from './Pages/TasksManager';

const App = () => {
  const { user } = useContext(AppContext);

  return user ? <TaskManager /> : <Login />;
};

const Root = () => (
  <AppProvider>
    <App />
  </AppProvider>
);

export default Root;
