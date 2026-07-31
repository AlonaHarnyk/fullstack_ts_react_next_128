/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());

  console.log("render");

  // setInterval(() => {
  //   console.log(new Date())
  //   setTime(new Date());
  // }, 1000);

  useEffect(() => {
    const timerId = setInterval(() => {
      console.log(new Date());
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}
