const client = require("./database");

const dataMapper = {
  getNouveautes: async () => {
    const nouveautes = await client.query("SELECT * FROM coffee LIMIT 3");
    // nouveautes contient plus de choses que seulement la data, on ne veut que les lignes recherchees
    return nouveautes.rows;
  },
};

module.exports = dataMapper;
