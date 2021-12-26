import React from "react";

function tasksReducer(currentState, action) {
  console.log(currentState, action);
  switch (action.type) {
    case "MARK_ALL_TRUE":
      return currentState.map((task) => {
        task.done = true;
        return task;
      });
    case "ADD_ONE_ITEM":
      return [...currentState, { content: action.input, done: false }];
    case "REMOVE_ITEM":
      return currentState.filter((task) => task.content !== action.input);
    case "MARK_AS_DONE":
      return currentState.map((task) => {
        if (task.content === action.input) {
          task.done = true;
        }
        return task;
      });
    default:
      return currentState;
  }
}

const TasksContext = React.createContext();

export { TasksContext, tasksReducer };
