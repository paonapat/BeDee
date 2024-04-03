import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
const dotenv = require("dotenv");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());
interface ToDoList {
  id: string;
  task: string;
}

let todos: ToDoList[] = [
  { id: "1", task: "check-in" },
  { id: "2", task: "check-out" },
];

// Get all todos
app.get("/todos", (req: Request, res: Response) => {
  res.json(todos);
});

// Create a new todo
app.post("/todos", (req: Request, res: Response) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).json(todo);
});

// Update a todo
app.put("/todos/:id", (req: Request, res: Response) => {
  const id: string = req.params.id;
  const todo = req.body;
  const todoItem = todos.find((i) => i.id === id);
  if (todoItem) {
    todoItem.task = todo.task;
  } else {
    todos.push({ id, task: todo.task });
  }
  res.json(todos);
});

// // Delete a todo
app.delete("/todos/:id", (req: Request, res: Response) => {
  const id: string = req.params.id;
  const todoItem = todos.find((i) => i.id === id);
  if (todoItem) {
    todos.splice(todos.indexOf(todoItem), 1);
  }
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
