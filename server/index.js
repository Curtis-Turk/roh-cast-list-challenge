import express from "express";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;

const app = express();
app.use(cors());
app.use(json());
const port = 3001;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
