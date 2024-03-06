require("dotenv").config();
const express = require("express");
const app = require("./app");
const {
  handleInvalidJson,
  handleUnauthorized,
  handleNotFound,
  handleAllOtherErrors,
} = require("./errors/errorHandler");
const morganMiddleware = require("./logging/morganMiddleware");
const Logger = require("./logging/logger");

app.use(express.static('public')); 

app.use(morganMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/paypal", require("./routes/paypal"));

app.use(handleInvalidJson);
app.use(handleUnauthorized);
app.use(handleNotFound);
app.use(handleAllOtherErrors);

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  Logger.info("Server is running on port 3000");
});
