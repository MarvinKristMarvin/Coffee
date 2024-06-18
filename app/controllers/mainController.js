//const dataMapper = require("../dataMapper");
//const client = require("../database");

const mainController = {
  // méthode pour la page d'accueil
  renderAccueil: (req, res) => {
    res.render("accueil");
  },
  renderCatalogue: (req, res) => {
    res.render("catalogue");
  },
  renderProduit: (req, res) => {
    res.render("produit");
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
