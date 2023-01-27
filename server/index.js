import express from "express";
import cors from "cors";
import pkg from "body-parser";
const { json } = pkg;
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(json());
const port = 3001;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/turandot", async (req, res) => {
  const turandotUrl =
    "https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban";
  const response = await fetch(turandotUrl);
  const data = await response.json();
  res.json({ data: data });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
