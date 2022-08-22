import { useState } from "react";

export default function OnOffButton() {
  const [turnOn, setTurnOn] = useState(false);
  return <button className="on-off-btn">ON/OFF</button>;
}
