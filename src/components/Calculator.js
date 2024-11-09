import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [inputVal, setInputVal] = useState("");
  const [output, setOutput] = useState("");
  const [isCalculate, setIsCalculate] = useState(false);

  //function to set the value in input field after clicking on buttons
  const handleBtnClick = (val) => {
    setInputVal((prev) => prev + val);
  };

  //function to calculate the expression on clicking = button
  const handleCalculate = () =>{
    setIsCalculate(true);
    try {
        const result = eval(inputVal).toString();
        setOutput(result);
      } catch (error) {
        setOutput("Error");
      }
  }

  //fucntion to clear everything upon clicking on C button
  const handleClear = () =>{
    setInputVal('');
    setOutput('');
    setIsCalculate(false);
  }
  return (
    <div>
      <h1>React Calculator</h1>
      <input type="text" value={inputVal} />
      {isCalculate && (
        <p>{output}</p>
      )}
      <div className="btn-container">
        <div>
          <button onClick={() => handleBtnClick("7")}>7</button>
          <button onClick={() => handleBtnClick("8")}>8</button>
          <button onClick={() => handleBtnClick("9")}>9</button>
          <button onClick={() => handleBtnClick("+")}>+</button>
        </div>
        <div>
          <button onClick={() => handleBtnClick("4")}>4</button>
          <button onClick={() => handleBtnClick("5")}>5</button>
          <button onClick={() => handleBtnClick("6")}>6</button>
          <button onClick={() => handleBtnClick("-")}>-</button>
        </div>
        <div>
          <button onClick={() => handleBtnClick("1")}>1</button>
          <button onClick={() => handleBtnClick("2")}>2</button>
          <button onClick={() => handleBtnClick("3")}>3</button>
          <button onClick={() => handleBtnClick("*")}>*</button>
        </div>
        <div>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleBtnClick("0")}>0</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleBtnClick("/")}>/</button>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
