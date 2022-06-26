const http = require("http");
const path = require("path");
const fs = require("fs");
const port = process.env.PORT || 5000;

// const mydir = path.join("/Projects/learning/Bootstrap5-project/index.html");
const server = http.createServer((req, res) => {
  //   if (req.url === "/") {
  //     fs.readFile(mydir, (err, content) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-Type": "text/html" });
  //       res.end(content);
  //     });
  //   }

  // Build file path
  let filepath = path.join(
    "/Projects/learning/",
    "Bootstrap5-project",
    req.url === "/" ? "index.html" : req.url
  );
  // Extension of file
  let extname = path.extname(filepath);

  //   Initial content type
  let contentType = "text/html";

  //Check extension and set content type
  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
    case ".svg":
      contentType = "image/svg+xml";
      break;
  }

  //   Read file
  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(path.join(__dirname, "404.html"), (err, content) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(content, "utf8");
        });
      } else {
        // Some server error
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
