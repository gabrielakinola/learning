const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const membersapi = require("./routes/api/membersapi");

const logger = require("./middleware/logger");
const app = express();

//Handlebars middleware
//app.engine("handlebars", exphbs({ dafaultLayout: "main" }));
//app.set("view engine", "handlebars");

pathdir = path.join("C:/Projects/Ticketmaster");

//init logger
//app.use(logger);

// Body Parser Middleware
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//Homepage route
//app.get("/", (req, res) => res.render("index"));
//Set Static folder
app.use(express.static(pathdir));

//Members api routes
app.use("/api/members", membersapi);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
