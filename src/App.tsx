import { useState } from "react";
import './App.css';

const App = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <h1>App</h1>
      <button onClick={() => setState(state + 1)}></button>
      <button onClick={() => setState(state - 1)}></button>
      <button onClick={() => setState(state * 0)}></button>
      <p>{state}</p>
    </>
  );
};

export default App;
