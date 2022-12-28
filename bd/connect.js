const { MongoClient, Db } = require("mongodb");

var client = null;

const connection = (url, callback) => {
  if (client == null) {
    client = new MongoClient(url);

    client.connect((error) => {
      if (error) {
        client = null;
        callback(error);
      } else {
        callback();
      }
    });
  } else {
    callback();
  }
};

const bd = () => {
  return new Db(client, "ExpressTuto");
};

const closeConnection = () => {
  if (client) {
    client.close();
    client = null;
  }
};

module.exports = { connection, closeConnection, bd };
