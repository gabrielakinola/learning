const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { prototype } = require("events");

app.use(express.static(path.join(__dirname, "public")));

const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
