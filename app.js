const express = require("express");
const mongoose = require("mongoose");

const keys = require("./config/keys");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    keys.mongoURI,
    {
      useNewUrlParser: true
    })
        .then(() => console.log("MongoDb connection"))
        .catch(err => console.log(err));

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`started server on port ${port}`);
});

