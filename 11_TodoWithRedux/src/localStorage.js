export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos');
    if (serializedState === null) {
      return undefined; // Let Redux initialize the state
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading state from Local Storage:", err);
    return undefined;
  }
};

// Function to save state to Local Storage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('todos', serializedState);
  } catch (err) {
    console.error("Error saving state to Local Storage:", err);
  }
};