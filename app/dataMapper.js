const client = require("./database");

const dataMapper = {
  getNouveautes: async () => {
    const nouveautes = await client.query("SELECT * FROM coffee LIMIT 3");
    // nouveautes contient plus de choses que seulement la data, on ne veut que les lignes recherchees
    return nouveautes.rows;
  },

  getTousLesCafes: async () => {
    const cafes = await client.query("SELECT * FROM coffee");
    return cafes.rows;
  },

  getCafeById: async (id) => {
    const cafe = await client.query(`SELECT * FROM coffee WHERE id = ${id}`);
    // éviter de retourner un tableau avec seulement un objet dedans, renvoyer juste l'objet
    return cafe.rows[0];
  },
};

module.exports = dataMapper;
