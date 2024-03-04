import axios from "axios";

export function Todos({ todos }) {
  async function handleMarkTodo(id) {
    try {
      await axios.put(`http://localhost:3000/todo/${id}`);
      window.location.reload(false);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      {todos.map((t) => {
        return (
          <div
            key={t._id}
            style={{
              display: "flex",
              marginLeft: "10px",
            }}
          >
            <div
              style={{
                width: "190px",
              }}
            >
              {t.title}
            </div>
            <div
              style={{
                width: "200px",
                marginLeft: "25px",
              }}
            >
              {t.description}
            </div>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleMarkTodo(t._id)}
            />
          </div>
        );
      })}
    </div>
  );
}
