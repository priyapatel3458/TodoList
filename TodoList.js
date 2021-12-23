import React, { useReducer, useContext } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { TasksContext, tasksReducer } from "./tasksHelpers";

function Footer() {
  const tasks = useContext(TasksContext);
  return (
    <footer style={{ backgroundColor: "lightgreen" }}>
      <Stats />
      <p>Contact us (c -- {tasks.length})</p>
    </footer>
  );
}

//! as a descenendet of TasksContext provider
function Stats() {
  const tasks = useContext(TasksContext);

  return (
    <div>
      <h1 style={{ color: "red" }}>Stats</h1>
      <p>Total tasks = {tasks.length}</p>
      <p>Uncompleted tasks = {tasks.filter((t) => !t.done).length}</p>
      <p>Completed tasks = {tasks.filter((t) => t.done).length}</p>
    </div>
  );
}

function TodoList() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  function addOneItem(str) {
    //! object is called action
    dispatch({ type: "ADD_ONE_ITEM", input: str });
  }

  function deleteOneItem(str) {
    dispatch({ type: "REMOVE_ITEM", input: str });
  }

  function setItemToTrue(str) {
    dispatch({ type: "MARK_AS_DONE", input: str });
  }

  return (
    <TasksContext.Provider value={tasks}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <TodoInput addOneItem={addOneItem} />
        <ul>
          {tasks.map((task) => {
            return (
              <TodoItem
                onDelete={deleteOneItem}
                onClick={setItemToTrue}
                done={task.done}
              >
                {task.content}
              </TodoItem>
            );
          })}
        </ul>
        <button
          onClick={function () {
            dispatch({ type: "MARK_ALL_TRUE" });
          }}
        >
          Mark all as true{" "}
        </button>

        <Footer />
      </div>
    </TasksContext.Provider>
  );
}

//! * (asterisk)
//! Kleene Star (*) [0 or more of a particular type]
/* 

           App (x = 5)
            |
          TodoList (tasks)  [chooses to be provider]
            |
    TodoInput(U)   TodoItem*(U)   Footer(P) (y =7)
        (z = 23)                   | 
                             XYZ (P)
                              |
                             ABC (P)
                              |
                            Stats (U)
                              |
                            actual html
*/

//! Context > Prop-drilling
//! P to Child communication (do it via props)
//! P to descendent communication (done via contexts)
//! IDEAs
//! TodoList "provides" the "tasks" array (Provider)
//! Stats "consume" it. (Consumer)
//! Rules
//! Given a Provider P, there can be many consumers
//! A consumer can consumer from multiple provider

export default TodoList;
