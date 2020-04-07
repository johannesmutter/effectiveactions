require('dotenv').config();

const express = require('express'),
      http = require('http'),
      path = require("path"),
      cors = require('cors'),
      helmet = require('helmet'),
      app = express(),
      bodyParser = require('body-parser'),
      port = 9060,
      server = http.createServer(app),
      airtable = require("./airtable.js");

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

airtable.airtableMiddleware(app);

app.use(express.static(path.resolve(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "build", "index.html"));
});

server.listen(port, () => console.log(`Listening on port ${port}`));
