import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, text: 'Buy christmas presents', isComplete:   false },
    { id: 2, text: 'Go food shopping', isComplete: true },
    { id: 3, text: 'Finish final assignment', isComplete: false },
    { id: 4, text: 'Create a todo app', isComplete: true },
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

 

  
  },
});

export const { addTask, removeTask, completeTask, countUncompletedTasks } = tasksSlice.actions;

export const tasksList = (state) => state.tasks.items;

export default tasksSlice.reducer;
