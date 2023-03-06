const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Set view engine to EJS and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public"))); // Serve public/ directory

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
