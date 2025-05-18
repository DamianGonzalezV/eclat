const express = require("express");
const app = express();
const PORT = 8484;

// app.use(express.static("public"));
app.use(express.static("eclat"));
app.use(express.static("eclat/images"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/eclat/index.html");
});

// listen always second
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
