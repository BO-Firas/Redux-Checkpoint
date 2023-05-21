import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from './redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = (e) => {
    const newDescription = e.target.value;
    dispatch(editTask(task.id, newDescription));
  };

  return (
    <div className={`task ${task.isDone ? 'task-done' : ''}`}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggle}
        className="task-checkbox"
      />
      <input
        type="text"
        value={task.description}
        onChange={handleEdit}
        readOnly={task.isDone}
        className="task-input"
      />
    </div>
  );
};

export default Task;
