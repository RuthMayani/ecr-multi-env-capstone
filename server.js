const http = require("http");

const port = process.env.PORT || 3000;
const environment = process.env.APP_ENV || "local";

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(
    JSON.stringify({
      application: "ecr-multi-env-capstone",
      environment,
      status: "running"
    })
  );
});

server.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
