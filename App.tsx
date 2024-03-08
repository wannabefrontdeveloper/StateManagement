import React from 'react';
import {Provider} from 'react-redux';
import TodoApp from './components/TodoApp';
import rootReducer from './slices';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({reducer: rootReducer});

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
