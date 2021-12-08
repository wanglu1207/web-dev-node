const model = require('./profile-model');

const findProfileById = (id) =>
    model.findById(id);

const updateProfile=(id,profile)=>
    model.updateOne({_id:id},{$set:profile});

module.exports = {                          // export as an API to use in service
    findProfileById,updateProfile
};