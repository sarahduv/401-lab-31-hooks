import React, { useState, useEffect, useReducer } from "react";

const initialState = { words: "Test" };

const App = () => {
  let [input, setInput] = useState();
  let [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.title = `{state.words}`;
  });

  let handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: "enter", newWords: input });
  };

  let handleReset = event => {
    dispatch({ type: "reset" });
  };

  return (
    <>
      <div>{state.words}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">submit</button>
        <button type="button" onClick={handleReset}>
          reset
        </button>
      </form>
    </>
  );
};

const reducer = (state, action) => {
  console.log("this is me state", state);
  console.log("this is my action", action);
  switch (action.type) {
    case "enter":
      return { words: action.newWords.toUpperCase() };
    case "reset":
      return { words: "" };
    default:
      throw new Error();
  }
};

export default App;
