import { useState } from "react";
import "./style.css";
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const fullArr = [
    { name: "good", num: good, fn: setGood },
    { name: "neutral", num: neutral, fn: setNeutral },
    { name: "bad", num: bad, fn: setBad },
    { name: "all", num: good + neutral + bad },
    { name: "average", num: (good + bad * -1) / (good + bad + neutral) },
    { name: "positive", num: (good / (neutral + bad + good)) * 100 },
  ];

  return (
    <div>
      <h1>give feedback</h1>
      <Button name={"good"} handler={() => setGood(good + 1)} />
      <Button name={"neutral"} handler={() => setNeutral(neutral + 1)} />
      <Button name={"bad"} handler={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Statistics fullArr={fullArr} />
    </div>
  );
}

const Statistics = ({ fullArr }) => {
  const total = fullArr
    .map((obj) => obj.num)
    .reduce((accum, cur) => accum + cur);
  if (!total) {
    return (
      <>
        <p>No feed back given</p>
      </>
    );
  } else
    return (
      <>
        {fullArr.map((obj) => {
          return (
            <div className="table">
              <Stats type={obj.name} number={obj.num} />
            </div>
          );
        })}
      </>
    );
};

const Button = ({ name, handler }) => {
  return <button onClick={handler}>{name}</button>;
};

const Stats = ({ type, number }) => {
  if (type === "positive") {
    return (
      <td>
        {type} {number || 0}%
      </td>
    );
  }
  return (
    <tr>
      <td>{type}</td>
      <td>{number}</td>
    </tr>
  );
};
export default App;
