// import axios from "axios";
// import Test from "./Test";
import { useState, useEffect } from "react";
import Timer from "./Timer";
import Sidebar from "./Sidebar";
import { useLocalStorage } from "usehooks-ts";

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  // const [person, setPerson] = useState(null);
  // const [clicks, setClicks] = useState(1);
  // const [isSidebarOpen, setIsSideBarOpen] = useState(() => {
  //   const savedState = localStorage.getItem("sidebar-state");
  //   if (!savedState) {
  //     return false;
  //   }
  //   return JSON.parse(savedState);
  // });

  // useEffect(() => {
  //   localStorage.setItem("sidebar-state", JSON.stringify(isSidebarOpen));
  // }, [isSidebarOpen]);

  // console.log("render");

  // useEffect(() => {
  //   console.log("effect");
  //   const fetchPerson = async () => {
  //     const response = await axios(`https://swapi.info/api/people/${clicks}`);
  //     setPerson(response.data);
  //   };

  //   fetchPerson()
  //   // axios(`https://swapi.info/api/people/${clicks}`).then((person) =>
  //   //   setPerson(person),
  //   // );
  // }, [clicks]);

  // useEffect(() => {
  //   console.log('Hello!')
  // }, [])

  // axios("https://swapi.info/api/people/1").then((person) => setPerson(person));


  const [isSidebarOpen, setIsSideBarOpen] = useLocalStorage("sidebar-state", false)

  const openSidebar = () => setIsSideBarOpen(true);
  const closeSidebar = () => setIsSideBarOpen(false);

  return (
    <>
      <h1>Side effects</h1>
      {/* <button onClick={() => setClicks(clicks + 1)}>Click</button>
      {person && <pre>{JSON.stringify(person, null, 2)}</pre>} */}
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Toggle Timer
      </button>
      {isVisible && <Timer />}
      <button onClick={openSidebar}>Open sidebar</button>
      {isSidebarOpen && <Sidebar onClose={closeSidebar} />}
    </>
  );
}
