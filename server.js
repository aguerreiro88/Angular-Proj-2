const express = require("express");
const routes = require('./src/app/routes/tickets.routes');
const cors = require('cors');
const bodyParser = require("body-parser");
const db = require("./src/app/models");

const app = express();
const port = process.env.PORT || 3000;

// //mongoose connection
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
}).then(
  () => {
    console.log(`Connected successfully to ${db.url}`);
  },
  (error) => {
    console.log(`Could not connect to database:  ${error}`);
  }
);

//body-parser setup
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.use(cors());

routes(app);

app.get("/", (request, response) => {
  response.send("Hello Angular Express");
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}!`);
});

module.exports = app;
