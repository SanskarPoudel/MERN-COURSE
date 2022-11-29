const addlists = (state, todo) => {
  return [{ title: todo, completed: false }, ...state];
};

const addThroughApi = (state, data) => {
  return [...data];
};

const clear = () => {
  return [];
};

const changeTodoStrike = (state, id) => {
  const newTodoList = state.map((todo, idx) => {
    if (id === idx) {
      return { ...todo, completed: !todo.completed };
    } else return todo;
  });

  return newTodoList;
};

const deleteTodo = (state, id) => {
  const newList = state.filter((lists, listIndex) => {
    return id !== listIndex;
  });

  return newList;
};

const TodoController = (state, action) => {
  switch (action.type) {
    case "addLists":
      return addlists(state, action.payload);
    case "addThroughApi":
      return addThroughApi(state, action.payload);
    case "changeTodoStrike":
      return changeTodoStrike(state, action.payload);
    case "clear":
      return clear();
    case "deleteTodo":
      return deleteTodo(state, action.payload);
    default:
      return state;
  }
};

export { TodoController };
