import "./styles.css";
import React, { useState } from "react";

const arr = ["Fiction", "Non-fiction", "Self-help"];
const fictionList = [
  { name: "Kafka On the Shore", rating: 5 },
  { name: "Norwegian Woods", rating: 4.5 },
  { name: "Wuthering Heights", rating: 4 }
];
const nonFictionList = [
  { name: "The God Delusion", rating: 5 },
  { name: "Never Split the Difference", rating: 4 }
];
const selfHelp = [
  { name: "Can't hurt me", rating: 3.5 },
  { name: "The Mindset", rating: 4.5 },
  { name: "Deep Work", rating: 5 },
  { name: "The 5 AM Club", rating: 4 }
];

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
                <p>{item.name}</p>
                {"Rating = " + item.rating}
              </li>
            );
          })}

        {activeIndex === 1 &&
          nonFictionList.map((item) => {
            return (
              <li type="none" className="book-list-item">
                <p>{item.name}</p>
                {"Rating = " + item.rating}
              </li>
            );
          })}

        {activeIndex === 2 &&
          selfHelp.map((item) => {
            return (
              <li type="none" className="book-list-item">
                <p>{item.name}</p>
                {"Rating = " + item.rating}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
