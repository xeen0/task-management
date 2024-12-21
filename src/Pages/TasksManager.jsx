// TaskManager.js
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const TaskManager = () => {
  const { user, tasks, setTasks, logout } = useContext(AppContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState('');

  const addTask = () => {
    if (!taskTitle) return alert('Task title cannot be empty!');
    setTasks([...tasks, { title: taskTitle, completed: false }]);
    setTaskTitle('');
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingValue(tasks[index].title);
  };

  const saveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].title = editingValue;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setEditingValue('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Welcome, {user}</h1>
        <button
          className="bg-slate-500 text-white px-4 py-2 rounded"
          onClick={logout}
        >
          Logout
        </button>
      </div>
      <div className="mb-4">
        <input
          className="border p-2 mr-2"
          placeholder="New Task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      <ol className="list-decimal">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`p-2 mb-2 flex justify-between items-center ${
              task.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            <span className='pr-1'>{index+1}.</span>{editingIndex === index ? (
              <input
                type="text"
                className="border p-1 flex-1 mr-2"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
                onBlur={() => saveEdit(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') saveEdit(index);
                }}
              />
            ) : (
              <span
                className="flex-1 mr-2 cursor-pointer"
                onDoubleClick={() => handleEdit(index)}
              >
                {task.title}
              </span>
            )}
            <button
              className="bg-green-500 text-white px-2 py-1 mr-2"
              onClick={() => toggleComplete(index)}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              className="bg-red-500 text-white px-2 py-1"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskManager;
