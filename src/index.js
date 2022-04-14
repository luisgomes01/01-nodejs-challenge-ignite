const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

function checksExistsUserAccount(req, res, next) {
  // Complete aqui
}

app.post("/users", (req, res) => {
  // Complete aqui
});

app.get("/todos", checksExistsUserAccount, (req, res) => {
  // Complete aqui
});

app.post("/todos", checksExistsUserAccount, (req, res) => {
  // Complete aqui
});

app.put("/todos/:id", checksExistsUserAccount, (req, res) => {
  // Complete aqui
});

app.patch("/todos/:id/done", checksExistsUserAccount, (req, res) => {
  // Complete aqui
});

app.delete("/todos/:id", checksExistsUserAccount, (req, res) => {
  // Complete aqui
});

app.listen(3001);
