const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "Wrong inputs",
    });
    return;
  }
  try {
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });
    res.json({
      msg: "Todo created",
    });
  } catch (error) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await todo.find({});
    res.json({
      todos,
    });
  } catch (error) {
    console.log("seems like a network error");
    res.status(400).send("Something went wrong");
  }
});

app.put("/todo/:id", async (req, res) => {
  const updatePayload = req.params;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  try {
    const presentTodo = await todo.findById(updatePayload.id)
    //if todo is not present in db return 404
    if (!presentTodo) {
      return res.status(404).send("Todo not found");
    }
    await todo.updateOne(
      {
        _id: presentTodo._id,
      },
      {
        completed: !presentTodo.completed,
      }
    );
    res.send(presentTodo);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Something went wrong",
    });
  }
});

app.listen(3000);
