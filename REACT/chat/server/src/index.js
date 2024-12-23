const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./db/db.connection");
const routes = require("./routes/v1");
const config = require("./config/config");

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json()); 

app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

connectDB();

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server listening on port number ${config.port}`);
});