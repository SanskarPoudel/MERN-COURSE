import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addLists: (state, action) => {
      return [...state, action.payload];
    },

    deleteTodo: (state, action) => {
      const newTodo = state.filter((todo, idx) => {
        return action.payload !== idx;
      });
      return newTodo;
    },

    completedTodo: (state, action) => {
      const newTodo = state.map((todo, idx) => {
        if (idx === action.payload) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
      return newTodo;
    },
    clearAll: (state, action) => {
      return [];
    },
  },
});

export const { addLists, deleteTodo, completedTodo, clearAll } =
  TodoSlice.actions;

export default TodoSlice.reducer;
