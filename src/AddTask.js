import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/actions';

const AddTask = () => {
  const [taskInput, setTaskInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() !== '') {
      dispatch(addTask(taskInput));
      setTaskInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Add a task..."
        className="task-input"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
};

export default AddTask;
