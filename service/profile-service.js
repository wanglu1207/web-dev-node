let profile = require('../profile/profile-dao')

module.exports = (app) => {
    const getCurrentProfile = (req, res) => {
        res.json(profile);
    }
    app.get('/api/profile', getCurrentProfile);

    const updateCurrentProfile = (req, res) => {
        const newProfile = { ...profile, ...req.body }
        profile = newProfile;
        return res.json(profile);
    }
    app.post('/api/profile', updateCurrentProfile);
};