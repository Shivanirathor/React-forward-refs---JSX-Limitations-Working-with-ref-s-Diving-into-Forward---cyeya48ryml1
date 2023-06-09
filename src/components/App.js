import React, { useRef, useState } from 'react'
import '../styles/App.css';
import InputField from './InputField.js';
const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  const newRef = useRef(null);

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };

  const settingValue = () => {
    setTextareaValue(inputValue)
  };

  const focusInput = () => {
    newRef.current.focus();
  }


  return (
    <div>
      <InputField ref={newRef} value={inputValue} onChange={inputHandler} /><br />
      <button id="settingValueButton" onClick={settingValue}>Set Value</button>
      <button id="focusInputButton" onClick={focusInput}>Focus the input</button><br /><br />
      <textarea id="textarea" value={textareaValue} readOnly></textarea>

    </div>
  );
}


export default App;
