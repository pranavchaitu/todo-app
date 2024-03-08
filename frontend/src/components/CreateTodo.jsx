import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        style={{
          padding: "10px",
          margin: "10px",
        }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="description"
        style={{
          padding: "10px",
          margin: "10px",
        }}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button
        style={{
          padding: "10px",
          margin: "10px",
          cursor : "pointer"
        }}
        onClick={async () => {
          await fetch("https://todo-app-0.onrender.com/todo", {
            method: "POST",
            body: JSON.stringify({
              title,
              description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          })
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
