import { ADD_TASK, TOGGLE_TASK, EDIT_TASK } from './actions';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now().toString(),
        description: action.payload,
        isDone: false,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };

    case TOGGLE_TASK:
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        }
        return task;
      });
      return {
        ...state,
        tasks: updatedTasks,
      };

    case EDIT_TASK:
      const { id, description } = action.payload;
      const editedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            description,
          };
        }
        return task;
      });
      return {
        ...state,
        tasks: editedTasks,
      };

    default:
      return state;
  }
};

export default tasksReducer;
