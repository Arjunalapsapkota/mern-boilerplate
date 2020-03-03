require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
  console.log(" I received your request");
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
app.listen(PORT, () => {
  console.log("Server successfully running on port:8000");
});
