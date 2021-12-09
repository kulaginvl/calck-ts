import React from "react";
import { AllButtons } from "./components/AllButtons";
import { Display } from "./components/Display";

let arrSign = ["+", "-", "/", "*", "=", "%"];

export const App = () => {
  const [firstNum, setFirstNum] = React.useState("");
  const [secNum, setSecNum] = React.useState("");
  const [actionSign, setActionSign] = React.useState("");
  const [result, setResult] = React.useState(false);

  let signInArr = (key: string) => arrSign.includes(key);

  const handleKey = (key: string) => {
    result ? withResult(key) : noResult(key);
  };

  const noResult = (key: string) => {
    if (key !== "=" && firstNum && secNum && actionSign && signInArr(key)) {
      calculate();
      setActionSign(key);
    } else if (key === "AC") {
      clearAll();
    } else if (key === "+/-") {
      plusMinus();
    } else if (key === "%") {
      countProc();
    } else if (firstNum === "∞") {
      clearAll();
      setFirstNum(key);
    } else if (key !== "=" && signInArr(key)) {
      setActionSign(key);
    } else if (key !== "=" && !actionSign) {
      setFirstNum(`${firstNum}${key}`);
    } else if (key !== "=" && actionSign && firstNum) {
      setSecNum(`${secNum}${key}`);
    } else if (key === "=") {
      calculate();
    }
  };

  const withResult = (key: string) => {
    if (firstNum && key !== "=" && signInArr(key)) {
      setActionSign(key);
      setResult(false);
    } else if (key === "AC") {
      clearAll();
    } else if (key === "+/-") {
      plusMinus();
    } else if (key === "%") {
      countProc();
    } else if (!actionSign && !arrSign.includes(key)) {
      clearAll();
      setFirstNum(key);
      setResult(false);
    } else if (actionSign && firstNum) {
      setSecNum(key);
      setResult(false);
    }
  };

  const clearAll = () => {
    setResult(false);
    setFirstNum("");
    setSecNum("");
    setActionSign("");
  };

  const calculate = () => {
    if (firstNum && actionSign && !secNum) {
      setSecNum(firstNum);
    } else {
      setResult(true);
      setSecNum("");
      setActionSign("");
    }
    switch (actionSign) {
      case "+":
        setFirstNum((+firstNum + +secNum).toString());
        break;
      case "-":
        setFirstNum((+firstNum - +secNum).toString());
        break;
      case "*":
        setFirstNum((+firstNum * +secNum).toString());
        break;
      case "/":
        if (secNum === "0") {
          clearAll();
          setFirstNum("∞");
          return;
        }
        setFirstNum((+firstNum / +secNum).toString());
        break;
    }
  };

  const plusMinus = () => {
    switch (actionSign) {
      case "-":
        setFirstNum(`+${firstNum}`);
        break;
      case "+":
        break;
      default:
        setFirstNum(`-${firstNum}`);
    }
    if (firstNum.toString().split("").includes("-")) {
      setFirstNum(`+${firstNum.toString().slice(1)}`);
    } else if (firstNum.toString().split("").includes("+")) {
      setFirstNum(`-${firstNum.toString().slice(1)}`);
    }
  };

  const countProc = () => {
    if (secNum === "") setFirstNum((+firstNum / 100).toString());
    else if (firstNum !== "" && secNum !== "") {
      setSecNum(((+firstNum / 100) * +secNum).toString());
    }
  };

  console.log("x", firstNum);
  console.log("y", secNum);
  console.log("action", actionSign);
  console.log("Res", result);

  return (
    <div className="calculator">
      <Display x={firstNum} y={secNum} action={actionSign} />
      <div className="btns">
        <AllButtons onAddClick={(value) => handleKey(value)} />
      </div>
    </div>
  );
};
