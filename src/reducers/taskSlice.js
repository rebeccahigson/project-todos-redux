import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, text: 'Watch video on actions & reducers', complete:   true },
    { id: 2, text: 'Follow redux code along', complete: true },
    { id: 3, text: 'Fork weekly assignment', complete: true },
    { id: 4, text: 'Create a todo app', complete: false },
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
    completeTask: (state, { payload }) => {
    const task = state.items.find((t) => t.id === payload);
    if (task) {
      task.complete = !task.complete;
    }
  },

  // Count tasks
  countTask:(state) => {
    return state.tasks.items.length;
  }
  },
});

export const { addTask, removeTask, completeTask, countTask } = tasksSlice.actions;

export const tasksList = (state) => state.tasks.items;

export default tasksSlice.reducer;
