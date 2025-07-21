// src/store/store.js

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/TodoSlice';
import { loadState, saveState } from '../localStorage';


// Load preloaded state from Local Storage
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  // Pass the preloaded state
  preloadedState,
});

// Subscribe to store changes and save the state to Local Storage
store.subscribe(() => {
  saveState({
    todos: store.getState().todos,
  });
});

export default store;