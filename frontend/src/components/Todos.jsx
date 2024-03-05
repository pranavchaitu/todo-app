import axios from "axios";

export function Todos({ todos, setTodos }) {
  async function handleMarkTodo(id) {
    try {
      const res = await axios.put(`https://todo-app-0.onrender.com/todo/${id}`);
      setTodos(todos.map((t) => (t._id === id ? res.data : t)));
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
              style={{
                cursor: "pointer",
              }}
              onChange={() => handleMarkTodo(t._id)}
            />
          </div>
        );
      })}
    </div>
  );
}
