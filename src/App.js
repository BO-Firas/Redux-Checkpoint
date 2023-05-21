import React from 'react';
import { Provider } from 'react-redux';
import AddTask from './AddTask';
import ListTask from './ListTask';
import store from './redux/store';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1 className="app-title">ToDo Application</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
