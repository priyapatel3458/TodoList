import React, { useState } from "react";
export default function TodoInput(props) {
  const { addOneItem } = props;
  const [input, setInput] = useState("");
  return [
    <input
      type="text"
      value={input}
      onChange={(event) => {
        let val = event.target.value;
        setInput(val);
      }}
    />,
    <button
      onClick={() => {
        if (input !== "") {
          addOneItem(input);
          setInput("");
        }
      }}
    >
      Add
    </button>
  ];
}
