const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 5555;
const app = express();
const cors = require("cors");
const router = require("./router");

const startServer = async () => {
  app.listen(PORT, () => {
    console.log("Server woke up");
  });
};
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({ message: err.message });
});

startServer();
