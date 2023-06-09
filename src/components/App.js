import React, { useRef } from 'react';
import InputField from './InputField';

const App = () => {
  const inputRef = useRef(null);

  const setTextAreaValue = () => {
    const inputValue = inputRef.current.value;
    const textarea = document.getElementById('textarea');
    textarea.value = inputValue;
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input id="input" type="text" ref={inputRef} />
      <button id="settingValueButton" onClick={setTextAreaValue}>
        Set Value
      </button>
      <button id="focusInputButton" onClick={focusInput}>
        Focus Input
      </button>
      <br />
      <textarea id="textarea" rows="5" cols="30" />
      <InputField ref={inputRef} />
    </div>
  );
};

export default App;
