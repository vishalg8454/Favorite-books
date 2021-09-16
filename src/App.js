import "./styles.css";
import React, { useState } from "react";

const arr = ["Fiction", "Non-fiction", "Self-help"];
const fictionList = [
  "Kafka On the Shore",
  "Norwegian Woods",
  "Wuthering Heights"
];
const nonFictionList = ["The God Delusion", "Never Split the Difference"];
const selfHelp = ["Can't hurt me", "The Mindset", "Deep Work", "The 5 AM Club"];

export default function App() {
  var [activeIndex, setActiveIndex] = useState(0);

  function clickHandler(index) {
    // console.log("hello");
    setActiveIndex(index);
  }

  return (
    <div className="App">
      <h1>
        Books I have read <span>📚</span>
      </h1>
      <h3>This is the collection of my favorite books I have read. </h3>
      <ul>
        {arr.map((item, index) => {
          console.log(item);
          return (
            <li type="none" className="hey">
              <button onClick={() => clickHandler(index)}>{item}</button>
            </li>
          );
        })}
      </ul>

      <ul className="list">
        {activeIndex === 0 &&
          fictionList.map((item) => {
            return (
              <li type="none" className="book-list-item">
                {item}
              </li>
            );
          })}

        {activeIndex === 1 &&
          nonFictionList.map((item) => {
            return <li className="book-list-item">{item}</li>;
          })}

        {activeIndex === 2 &&
          selfHelp.map((item) => {
            return <li className="book-list-item">{item}</li>;
          })}
      </ul>
    </div>
  );
}
