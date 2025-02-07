import React, { useState, useEffect } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Todo List</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Add a new task..."
        />
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>
      <div className="flex justify-between">
        <button onClick={() => setFilter("all")} className="text-sm px-2 py-1">
          All
        </button>
        <button onClick={() => setFilter("completed")} className="text-sm px-2 py-1">
          Completed
        </button>
        <button onClick={() => setFilter("incomplete")} className="text-sm px-2 py-1">
          Incomplete
        </button>
      </div>
      <ul className="space-y-2">
        {filteredTodos.map((todo, index) => (
          <li key={index} className="flex justify-between items-center p-2 border rounded">
            <span
              className={`flex-grow ${todo.completed ? "line-through text-gray-500" : ""}`}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)} className="text-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
