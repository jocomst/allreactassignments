import { useState } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const points = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  const [selected, setSelected] = useState(0);
  const [newPoints, setPoints] = useState(points);
  const [mostVotes, setPopular] = useState(0);

  const getMostPopular = (copiedArr) => {
    const votes = Object.values(copiedArr);
    let highest = 0;
    votes.forEach((count, i) => {
      if (count > highest) {
        highest = count;
        setPopular(i);
      }
    });
  };

  const genQuote = () => {
    const random = Math.trunc(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const addVote = () => {
    const copy = { ...newPoints };
    copy[selected]++;
    setPoints(copy);
    getMostPopular(copy);
  };

  return (
    <div>
      <h1>anecdote of the day</h1>
      <Quote
        quote={anecdotes[selected]}
        numOfVotes={newPoints[selected]}
      ></Quote>
      <div>
        <Button handler={() => addVote()} arr={anecdotes} use={"vote"} />
        <Button handler={genQuote} arr={anecdotes} use={"next anecdote"} />
      </div>
      <h1>anecdote with most votes</h1>
      <MostVoted mostPop={anecdotes[mostVotes]} votes={newPoints[mostVotes]} />
    </div>
  );
}

const Quote = ({ quote, numOfVotes }) => {
  return (
    <>
      <p>{quote}</p>
      <p>has {numOfVotes} votes</p>
    </>
  );
};

const Button = ({ handler, arr, use }) => {
  return <button onClick={() => handler(arr)}>{use}</button>;
};

const MostVoted = ({ mostPop, votes }) => {
  return (
    <>
      <p>{mostPop}</p>
      <p>has {votes} votes</p>
    </>
  );
};

export default App;
