const express = require("express");
const server = express();

server.use(express.static("D:/DCI/Projects/FbW39/Forking/FbW39_GroupA"));

const port = 2323;
server.listen(port, function (req, res) {
  console.log(`Server is listening to port ${port}`);
});
