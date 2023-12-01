import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, text: 'Watch video on actions & reducers', isComplete:   true },
    { id: 2, text: 'Follow redux code along', isComplete: true },
    { id: 3, text: 'Fork weekly assignment', isComplete: true },
    { id: 4, text: 'Create a todo app', isComplete: false },
  ]
}


export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Add task
    addTask: (state, action) => {
      state.items.push(action.payload);
    },

    // Remove task
    removeTask: (state, action) => {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },

    // Complete task
    completeTask: (state, action) => {
      const task = state.items.find((t) => t.id === action.payload);
      if (task) {
        task.isComplete = !task.isComplete;
      }
  },

  // Count tasks
  countTask:(state) => {
    return state.items.length;
  },

  // Count uncompleted tasks FIX
  countUncompletedTasks: (state) => {
    const uncompletedTasks = state.items.filter((task) => !task.isComplete);
    return uncompletedTasks.length;
  },
  },
});

export const { addTask, removeTask, completeTask, countUncompletedTasks } = tasksSlice.actions;

export const tasksList = (state) => state.tasks.items;

export default tasksSlice.reducer;
