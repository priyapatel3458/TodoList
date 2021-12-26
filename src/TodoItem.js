import React from "react";
export default function TodoItem(props) {
    const { children, done, onClick, onDelete } = props;
    return (
      <li style={{ color: done ? "green" : "red" }}>
        {children}
        <button
          onClick={() => {
            onClick(children);
          }}
        >
          Done
        </button>
        <button
          onClick={() => {
            onDelete(children);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
  