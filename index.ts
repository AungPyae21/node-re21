import fs from "fs";
import http from "http";

const PORT = 3000;
const server = http.createServer((req, res) => {
  console.log("http method is ", req.method);

  const data = fs.readFileSync("index.html");
  const testData = { name: "aug pyae", id: 96 };

  res.writeHead(200, "okkk", { "content-type": "application/json" });
  res.write(JSON.stringify(testData));
  res.end();
});

server.listen(PORT, () => console.log("Sever is running at", PORT));

// http//ip-address:port (example url)
