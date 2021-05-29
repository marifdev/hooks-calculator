import React, { useState } from "react";

import DataInput from "./components/DataInput"
import CalcButtons from "./components/CalcButtons"
import Operations from "./components/Operations"
import "./App.css";

function App() {
  const [data, setData] = useState("");

  function handleCalcButtonsClick(value) {
    setData(data + value);
  }

  function handleOperationsClick(value) {
    setData(data + value)
  }

  function handleEqualsClick() {
    try {
      setData(
        String(eval(data)).length > 3 &&
        String(eval(data)).includes(".")
         ? String(eval(data).toFixed(4))
          : String(eval(data))
      )
    }
    catch(err) {
      console.log(err)
    }
  }
  return (
    <div className="wrapper">
      <DataInput data={data}></DataInput>
      <CalcButtons onClick={handleCalcButtonsClick}></CalcButtons>
      <div className="modifiers subgrid">
        <button onClick={() => setData(data.substr(0, data.length - 1))}>Clear</button>
        <button onClick={() => setData("")}>AC</button>
      </div>
      <Operations onClick={handleOperationsClick} onEqualsClick={handleEqualsClick}></Operations>
    </div>
  );
}

export default App;