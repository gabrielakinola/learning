import express from "express";
import bp from "body-parser";
import morgan from "morgan";
import { debugPort } from "process";

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan("dev"));

const db = [];

app.post("/todo", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
  };

  db.push(newTodo);
  res.json(newTodo);
});

app.get("/todo", (req, res) => {
  res.json(db);
});

app.listen(8000, () => {
  console.log("Server on http://localhost:8000");
});
