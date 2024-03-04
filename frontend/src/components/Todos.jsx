import axios from "axios";

export function Todos({ todos }) {
  async function handleMarkTodo(id) {
    try {
      const res = await axios.put("http://localhost:3000/completed", {
        body: {
          _id: id,
        },
      });
      setTodos((t) => (t._id === id ? res.data : t));
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div>
      {todos.map((t) => {
        return (
          <div key={t._id}>
            <div>{t.title}</div>
            <div>{t.description}</div>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => handleMarkTodo(t._id)}
              // onChange={() => {
              //   fetch("http://localhost:3000/completed", {
              //     method: "PUT",
              //     body: JSON.stringify({
              //       id: t._id,
              //     }),
              //     headers: {
              //       "Content-type": "application/json",
              //     },
              //   }).then(() => {
              //     alert("todo done");
              //     window.location.reload(false);
              //   });
              // }}
            />
          </div>
        );
      })}
    </div>
  );
}
