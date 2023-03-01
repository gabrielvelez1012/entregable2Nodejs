const express = require("express");

//const cors = require("cors");
const db = require("./utils/database");
const Todo = require("./models/todo.models")
const todoRoutes = require("./routes/todo.routes");

Todo;

const PORT = 8000;

db.authenticate()
  .then(() => {
    console.log("Successful Auth!")
  })
  .catch((error) => {
    console.error(error)
  }); 

  db.sync()
.then(() => {
  console.log("DataBase is Connected!")
})
.catch((error) => {
  console.log(error)
})

const app = express();

app.use(express.json());

app.use(todoRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my server");
});


//app.use(cors());

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});