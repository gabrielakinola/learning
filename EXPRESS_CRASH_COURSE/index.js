const express = require("express");
const path = require("path");
const members = require("./Members");

const logger = require("./middleware/logger");
const app = express();

pathdir = path.join("C:/Projects/Ticketmaster");

//init logger
//app.use(logger);

//Get all members
app.get("/api/members", (req, res) => {
  res.json(members);
});

// Get single member
app.get("/api/members/:id", (req, res) => {
  res.json(members.filter((member) => member.id === req.params.id));
});
//Set Static folder
app.use(express.static(pathdir));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
