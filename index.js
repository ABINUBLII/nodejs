const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/administrator") {
    response.write("u'r now in administrator page"); //response write : nampilin ke page
  } else {
    response.write("u'r now in public page");
  }

  response.end();
});

const port = 3000;

server.listen(port, () => console.log(`server running on port ${port}`));

// atau bisa gini
// const http = require("http");

// const server = http
//   .createServer((request, response) => {
//     if (request.url === "/administrator") {
//       response.write("ur now in administrator page"); //response write : nampilin ke page
//     } else {
//       response.write("ur now in public page");
//     }

//     response.end();
//   })
//   .listen(3000, () => console.log("test"));
