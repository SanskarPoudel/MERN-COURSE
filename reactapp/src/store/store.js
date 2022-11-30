import todoReducer from "../pages/TodoList/TodoSlice";
const { configureStore } = require("@reduxjs/toolkit");
export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
