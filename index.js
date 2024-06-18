// Toujours commencer par importer les variables d'environnement !
require("dotenv").config();

const express = require("express");

// Les cookies de session
// const expressSession = require("express-session");

// on importe le router
const router = require("./app/router");

const PORT = process.env.PORT;

const app = express();

app.set("views", "./app/views");
app.set("view engine", "ejs");

/*app.use(
  expressSession({
    resave: true,
    saveUninitialized: true,
    secret: "nptq",
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, // ça fait une heure
    },
  })
);*/

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static("integration"));

// routage !
app.use(router);

// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});