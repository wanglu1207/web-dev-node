const dao = require("../who/who-model");

module.exports = (app) => {
    const findAllWho = (req, res) =>
        dao.findAllWho()
            then(who => res.json(who));
    app.get("/rest/who", findAllWho);
}
