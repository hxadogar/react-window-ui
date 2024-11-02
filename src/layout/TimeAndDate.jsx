import { useEffect } from "react";
import { useState } from "react";

export default function TimeAndDate() {
  const [time, setTime] = useState();
  const [date, setDate] = useState();

  function showDateTime() {
    setTime(new Date().toLocaleTimeString());
    setDate(new Date().toLocaleDateString());
  }

  useEffect(() => {
    showDateTime();
    setInterval(() => {
      showDateTime();
    }, 1000);
  }, [time, date]);

  return (
    <div className="timeanddate">
      <div>{time}</div>
      <div>{date}</div>
    </div>
  );
}
