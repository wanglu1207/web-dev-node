let profile = require('../profile/profile-dao')

module.exports = (app) => {
    const findProfileById=(req, res)=>{
        res.json(profile);
    }

    const updateProfile=(req, res)=>{
        const newProfile=req.body;
        const profileId=req.params['mid'];
        profile=profile.map(profile=>
            profile._id===profileId?newProfile:profile);
        res.json(profile);
    }
    app.put('/rest/profile/:id ', updateProfile);
    app.get('/rest/profile', findProfileById);
};
// module.exports = (app) => {
//     const getCurrentProfile=(req, res)=>{
//         res.json(profile);
//     }
//
//     const updateCurrentProfile=(req, res)=>{
//         res.json(profile);
//     }
//     app.put('/api/profile', updateCurrentProfile);
//     app.get('/api/profile', getCurrentProfile);
// };