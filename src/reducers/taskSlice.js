import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, text: 'Watch video on actions & reducers', complete:   true },
    { id: 2, text: 'Follow redux code along', complete: true },
    { id: 3, text: 'Fork weekly assignment', complete: true },
    { id: 4, text: 'Create a todo app', complete: false },
  ]
}

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
  // add task
    addTask: (state, { payload }) => {
      state.items.push(payload);
    },

  // remove task
    removeTask:(state, { payload }) => {
      state.items = state.items.filter((task) => task.id !== payload);
    },

  // complete task
  completeTask: (state, { payload }) => {
    const task = state.items.find((t) => t.id === payload);
    if (task) {
      task.complete = !task.complete;
    }
  },

  // filter task
  filterTask:(state) => {
    state.items = state.items.filter((task) => task.complete);
  },

  // count tasks
  countTask:(state) => {
    return state.tasks.items.length;
  }
}
});

export const { addTask, removeTask, completeTask, filterTask, countTask } = taskSlice.actions;
export const taskList = (state) => state.tasks.items;

export default taskSlice.reducer;