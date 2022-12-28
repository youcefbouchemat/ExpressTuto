const express = require("express");
const { connection } = require("./bd/connect");
const app = express();

connection("mongodb://127.0.0.1:27017/", (error) => {
  if (error) {
    console.log("Erreur lors de la connexion avec la base de données");
    process.exit(-1);
  } else {
    console.log("Coneexion avec la base de données établie");
    app.listen(3000);
  }
});
