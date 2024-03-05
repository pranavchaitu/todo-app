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
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title,
              description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(() => {
            alert("Todo added");
            window.location.reload(false)
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
