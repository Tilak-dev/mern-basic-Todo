const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {
   const createPayload = req.body;
   const parsedPayload = createTodo.safeParse(createPayload);
   if (!parsedPayload.success) {
      res.status(411).json({
         msg: "you sent the wrong input",
      });
      return;
   }
   //mongo code
   await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
   });

   res.status(200).json({
      msg: "TODO created successfully",
   });
});
app.get("/todos", async (req, res) => {
   const todos = await todo.find();
   res.status(200).json({
      todos,
   });
});
app.put("/completed", async (req, res) => {
   const updatePayload = req.body;
   const parsedPayload = updateTodo.safeParse(updatePayload);
   if (!parsedPayload.success) {
      res.status(411).json({
         msg: "you sent the wrong input",
      });
      return;
   }
   //mongo code
   await todo.update(
      {
         _id: req.body.id,
      },
      {
         completed: true,
      }
   );
   res.status(200).json({
      msg: " You sent wrong input",
   });
});

app.listen(PORT, () => {
   console.log(`server is on ${PORT}`);
});
