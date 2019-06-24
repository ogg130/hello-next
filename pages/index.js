/* Simple two-way binding example */
import React, { useState } from "react";

const InputElement = () => {
  /* use useState to track what is being typed into the field,
  initialized as "" */
  const [inputText, setInputText] = useState("");

  /* use useState to track a history of changes typed into the 
  field, initialized as empty array */
  const [historyList, setHistoryList] = useState([]);

  return (
    <>
      <input
        /*onChange gets fired on every keystroke */
        onChange={e => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter Some Text"
      />
      <br />
      {inputText}
      <hr />
      <br />
      <ul>
        {historyList.map(rec => {
          return <div>{rec}</div>;
        })}
      </ul>
    </>
  );
};

export default InputElement;
