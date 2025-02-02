// necessite la librairie express
const { Router } = require("express");

// on importe nos controllers
const mainController = require("./controllers/mainController.js");

const router = Router();

// page d'accueil
router.get("/", mainController.renderAccueil);
router.get("/catalogue", mainController.renderCatalogue);
router.get("/produit/:id", mainController.renderProduit);
router.get("/boutique", mainController.renderBoutique);

// on exporte le router
module.exports = router;
