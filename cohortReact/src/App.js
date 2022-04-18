const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course} />
      <Content partArr={course} />
      <Total arr={course} />
    </div>
  );
};

const Header = (prop) => {
  return <h1>{prop.course.name}</h1>;
};

const Content = (prop) => {
  return (
    <div>
      {prop.partArr.parts.map((el, i) => {
        return <Part key={i} part={el.name} exercises={el.exercises} />;
      })}
    </div>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Total = (prop) => {
  const total = prop.arr.parts
    .map((el) => el.exercises)
    .reduce((accum, cur) => accum + cur);
  return <p>Number of exercises {total}</p>;
};

export default App;
