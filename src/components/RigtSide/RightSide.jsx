import { useState } from "react";
import Calendar from "react-calendar";
import "./RightSide.css";

function RightSide() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
      <div className="background flex">
        <div>
          <input type="checkbox" />
          <label>Day 1</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Day 2</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Day 3</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Day 4</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>Day 5</label>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
