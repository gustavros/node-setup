import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // this is a middleware

app.get("/", (req, res) => {
  res.send("Hello vercel!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
