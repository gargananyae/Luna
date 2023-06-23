import React, { useRef, useState } from "react";

function MathPrac() {
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");
  const messageRef = useRef();
  const operations = ["+", "-", "*"];
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
  const handleSubmit = (e) => {
    const ans = generateAnswer();
    setMessage(ans === parseInt(userAnswer) ? "hurayyy" : "looooooser");
    messageRef.current.style.color =
      ans === parseInt(userAnswer) ? "green" : "red";
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
    </div>
  );
}

export default MathPrac;
