import { createRoot } from "react-dom/client";
import "./index.css";
import App from './components/App/App'
// import avatar from './assets/app-logo.png'

// console.log(avatar)

// const userName = 'Jackie'

// const foo = () => 'Hello!'

// const isOnline = false;

// const numbers = [1, 2, 3, 4, 5];

// const jsxMarkup = (
//   <>
//     {/* <ul>
//       {numbers.map((item) => {
//        return <li key={item}>{item}</li>;
//       })}
//     </ul> */}
//     {/* {isOnline && <p>Hello!</p>} */}
//     {/* {isOnline ? <p>Hello!</p> : <p>Bye!</p>}
//     <p>{isOnline ? "Hello!" : "Bye!"}</p> */}
//     {/* <img src="https://i.imgflip.com/5glqrg.jpg" alt={userName} width={320} />
//     <p>My name is {userName}</p>
//     <p>HTML in JS? What kind of black magic is this? 🧙‍♂️</p>
//     <p>
//       This is <strong>JSX (JavaScript XML)</strong> — and yes, you really get
//       used to it.
//     </p>
//     <p>{5 + 5}</p>
//     <p>{foo()}</p>
//     {undefined}
//     {null}
//     {false}
//     {true}
//     <img alt="cat" width={80} src={avatar} /> */}
//   </>
// );

createRoot(document.getElementById("root") as HTMLDivElement).render(<App/>);
