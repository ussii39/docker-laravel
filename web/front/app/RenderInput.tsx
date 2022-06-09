import React, { useState } from "react";

type HandlerProps = {
  outputConsole: Function;
};

const RenderInput = ({ outputConsole }: HandlerProps) => {
  const [input, setInput] = useState("");
  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const outputValue = () => {
    if (input) {
      outputConsole(input);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={input}
        onChange={updateValue}
      />
      <button onClick={outputValue}>Console</button>
    </div>
  );
};

export default RenderInput;
