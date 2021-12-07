let profile = require('../data/profile.json');

module.exports = (app) => {
    const getCurrentProfile=(req, res)=>{
        res.json(profile);
    }

    const updateCurrentProfile=(req, res)=>{
        res.json(profile);
    }
    app.put('/api/profile', updateCurrentProfile);
    app.get('/api/profile', getCurrentProfile);
};