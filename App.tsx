import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import TodoApp from './components/TodoApp';
import rootReducer from './slices';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

export default App;
