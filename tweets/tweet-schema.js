const mongoose = require('mongoose');
const schema = mongoose.Schema({
    topic: String,
    userName: String,
    verified: {type: Boolean, defaultValue: false},
    handle: String,
    time:String,
    title: String,
    tweet: String,
    attachments: {
        image: String
    },
    time: String,
    "logo-image": String,
    "avatar-image": String,
    stats: {
        comments: {type: Number, defaultValue: 0},
        retweets: {type: Number, defaultValue: 0},
        likes: {type: Number, defaultValue: 0}
    }
}, {collection: "tweets"});
module.exports = schema;
