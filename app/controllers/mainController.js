const dataMapper = require("../dataMapper");
const client = require("../database");

const mainController = {
  // méthode pour la page d'accueil
  renderAccueil: async (req, res) => {
    try {
      const nouveautes = await dataMapper.getNouveautes();
      res.render("accueil", { nouveautes });
    } catch (error) {
      console.log(error);
      res.render("404");
    }
  },
  renderCatalogue: async (req, res) => {
    try {
      const cafes = await dataMapper.getTousLesCafes();
      res.render("catalogue", { cafes });
    } catch (error) {
      console.log(error);
      res.render("404");
    }
  },
  renderProduit: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const cafe = await dataMapper.getCafeById(id);
      res.render("produit", { cafe });
    } catch (error) {
      console.log(error);
      res.render("404");
    }
  },
  renderBoutique: async (req, res) => {
    try {
      res.render("boutique");
    } catch (error) {
      console.log(error);
      res.render("404");
    }
  },

  // méthode pour la page article
  /*articlePage: async (request, response) => {
    try {
      const figurineId = Number(request.params.id);
      const figurine = await dataMapper.getOneFigurine(figurineId);
      const pageName = "article";
      response.render(pageName, { pageName, figurine });
    } catch (error) {
      response.status(500).send(error);
      console.log(error);
      client.end();
    }
  },*/
};

module.exports = mainController;
