import React, { useEffect, useRef, useState } from "react";

function MathPrac() {
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");
  const messageRef = useRef();
  const operations = ["+", "-", "*"];
  const [count, setCount] = useState({ correct: 0, incorrect: 0 });
  function getRandomNumber(x, y) {
    return Math.floor(Math.random() * (y - x) + x);
  }
  const [x, setX] = useState(getRandomNumber(1, 10));
  const [y, setY] = useState(getRandomNumber(1, 10));
  const [operator, setOperator] = useState(operations[getRandomNumber(0, 3)]);

  const handleInput = (e) => {
    e.preventDefault();
    setUserAnswer(e.target.value);
  };

  const generateAnswer = () => {
    if (operator === "+") return x + y;
    if (operator === "-") return x - y;
    return x * y;
  };
  const regenrateValues = () => {
    setX(getRandomNumber(1, 10));
    setY(getRandomNumber(1, 10));
    setOperator(operations[getRandomNumber(0, 3)]);
    setUserAnswer();
  };
  const setLocalStorage = () => {
    localStorage.setItem("count", JSON.stringify(count));
  };

  const getData = () => {
    setCount(JSON.parse(localStorage.getItem("count")));
  };
  useEffect(() => {
    getData();
  }, []);
  const handleSubmit = (e) => {
    const ans = generateAnswer();
    if (ans === parseInt(userAnswer)) {
      setMessage("hurayyy");
      messageRef.current.style.color = "green";
      setCount({ ...count, correct: count.correct + 1 });
    } else {
      setMessage("looooooser");
      messageRef.current.style.color = "red";
      setCount({ ...count, incorrect: count.incorrect + 1 });
    }
    regenrateValues();
    setLocalStorage();
  };

  return (
    <div>
      <h1>
        {x}
        {operator}
        {y}=
      </h1>
      <input placeholder="Your ans" value={userAnswer} onChange={handleInput} />
      <button onClick={handleSubmit}>Submit</button>
      <p ref={messageRef}>{message}</p>
      <p>Correct:{count.correct}</p>
      <p>Incorrect:{count.incorrect}</p>
    </div>
  );
}

export default MathPrac;
