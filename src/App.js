import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTask([...task, input]); // Add input to task list
      setInput(""); // Reset input to an empty string
      console.log("Task Submitted:", input);
    }
  };

  const handleDelete = (index) => {
    setTask(task.filter((_, i) => i !== index)); // Remove task at index
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <div>Task you want to submit into the list:</div>
        <input
          type="text"
          placeholder="Enter your work"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <ul>
          {task.map((tasks, index) => (
            <li key={index}>
              {tasks} <button onClick={() => handleDelete(index)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
