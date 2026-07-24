/**
 * - Зберігає стан count
 * - Збільшує поточне значення count при onClick
 * - Рендериться у App
 */

import { useState } from "react";

interface ClickCounterProps {
  onUpdate: () => void;
}

export default function ClickCounter({ onUpdate }: ClickCounterProps) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
    onUpdate()
  };

  // return <button onClick={onUpdate}>{clicks}</button>;
  return <button onClick={handleClick}>{clicks}</button>;
}
