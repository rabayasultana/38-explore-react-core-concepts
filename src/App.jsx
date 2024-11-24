import "./App.css";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {
  // const [count, setCount] = useState(0);

  const actors =['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Shah']


  const books = [
    {id: 1, name: 'physics', price:100},
    {id: 2, name: 'Math', price:120},
    {id: 3, name: 'Chemistry', price:130},
    {id: 4, name: 'Biology', price:150},
  ]
  const singers =[
    {id: 1, name: 'Dr. Mahfuzur Rahman', age: 68},
    {id: 2, name: 'Eva Rahman', age: 38},
    {id:3, name: 'Shuvro Dev', age: 58},
    {id:4, name: 'Pritom', age: 28}
  ]
  return (
    <>
      <h1>Vite + React</h1>

      <BookStore books={books}></BookStore>

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      <Actor name={"Bappa Raz"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {/* <Todo 
        task="Learn React" 
        isDone={true}>
      </Todo>
      <Todo 
        task="Explore core concepts" 
        isDone={false}>
      </Todo>
      <Todo 
        task="Try JSX" 
        isDone={true}>
      </Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Watch" price="10"></Device>
      <Device name="mobile"></Device>
      <Person></Person>

      <Person></Person>
      <Student></Student>
      <Student grade="7" score="99"></Student>
      <Developer></Developer> */}
    </>
  );
}

// function Device(props) {
//   console.log(props);
//   return (
//     <h2>
//       This device: {props.name} price:{props.price}{" "}
//     </h2>
//   );
// }

// function Person() {
//   const age = 25;
//   const person = { name: "sakib", age: 12 };
//   return (
//     <h3>
//       I am {person.name} with age: {age}
//     </h3>
//   );
// }

// const { grade, score } = { grade: "7", score: "99" };

// function Student({ grade, score }) {
//   console.log((grade = 1), (score = 0));
//   return (
//     <div className="student">
//       <h3>This is a student</h3>
//       <p>Name:</p>
//       <p>Class: {grade}</p>
//       <p>Score: {score}</p>
//     </div>
//   );
// }

// function Developer() {
//   const developerStyle = {
//     margin: "20px",
//     padding: "20px",
//     border: "2px solid purple",
//     borderRadius: "20px",
//   };
//   return (
//     <div style={developerStyle}>
//       <h5>Developer</h5>
//       <p>Coding: </p>
//     </div>
//   );
// }
export default App;
