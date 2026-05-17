const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const requestRoutes = require("./routes/request.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true }));

app.use("/users", userRoutes);
app.use("/requests", requestRoutes);

module.exports = app;