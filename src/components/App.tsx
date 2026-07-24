import { useState } from "react";
import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";
import TagsWidget from "./TagsWidget/TagsWidget";

// const calc = () => {
//   console.log("calc");
//   return 5 + 5;
// };

export default function App() {
  const [clicks, setClicks] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // const [number, setNumber] = useState(calc())

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement> ) => {
  //   console.log(event);
  //   console.log("Hello world");
  // };

  const handleClick = () => {
    setClicks(clicks + 1);
    // setClicks(clicks + 1);
    // setClicks(clicks + 1);
    // setClicks(clicks + 1);
    // setClicks((prevClicks) => prevClicks + 1);
    // setClicks((prevClicks) => prevClicks + 1);
    console.log(clicks);
  };

  console.log("render");

  const toggle = () => {
    // if (isVisible) {
    setClicks(0);
    // }
    setIsVisible(!isVisible);
  };

  return (
    <>
      <h1>State in React</h1>
      {/* <button onClick={handleClick}>Click</button> */}
      {/* <button
        onClick={() => {
          console.log("Hello world");
        }}
      >
        Click
      </button> */}
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && (
        <>
          <ClickCounter onUpdate={handleClick} />
          <ClickCounter onUpdate={handleClick} />
          <ClickCounter onUpdate={handleClick} />
          <CountDisplay clicks={clicks} />
        </>
      )}
      {/* <p>Counts: {clicks}</p> */}
      <TagsWidget />
    </>
  );
}
