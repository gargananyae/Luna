import React, { useState } from "react";

const RandomOperation = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState("");
  const [computedAnswer, setComputedAnswer] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const generateRandomNumbers = () => {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    setNum1(number1);
    setNum2(number2);
  };

  const generateRandomOperator = () => {
    const operators = ["+", "-", "*", "/"];
    const randomOperator =
      operators[Math.floor(Math.random() * operators.length)];
    setOperator(randomOperator);
  };

  const performOperation = () => {
    let answer = 0;
    switch (operator) {
      case "+":
        answer = num1 + num2;
        break;
      case "-":
        answer = num1 - num2;
        break;
      case "*":
        answer = num1 * num2;
        break;
      case "/":
        answer = num1 / num2;
        break;
      default:
        break;
    }
    setComputedAnswer(answer);
  };

  const handleUserAnswer = (event) => {
    setUserAnswer(event.target.value);
  };

  const checkAnswer = () => {
    if (Number(userAnswer) === computedAnswer) {
      setResultMessage("Hooraayy!");
    } else {
      setResultMessage("Loserrrr!");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    checkAnswer();
  };

  const resetGame = () => {
    setNum1(0);
    setNum2(0);
    setOperator("");
    setComputedAnswer(0);
    setUserAnswer("");
    setResultMessage("");
  };

  return (
    <div>
      <h2>Random Operation Game</h2>
      <button onClick={generateRandomNumbers}>Generate Numbers</button>
      <button onClick={generateRandomOperator}>Generate Operator</button>
      <button onClick={performOperation}>Perform Operation</button>
      <form onSubmit={handleSubmit}>
        <p>
          {num1} {operator} {num2} = ?
        </p>
        <input type="number" value={userAnswer} onChange={handleUserAnswer} />
        <button type="submit">Check Answer</button>
      </form>
      {resultMessage && (
        <div style={{ color: resultMessage === "Hooraayy!" ? "green" : "red" }}>
          {resultMessage}
        </div>
      )}
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default RandomOperation;
