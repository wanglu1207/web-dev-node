let tweets = require('../data/tweets.json');

module.exports = (app) => {
    const findAllTweets = (req, res) => {
        res.json(tweets);
    }

    app.get('/api/tweets', findAllTweets);

    const postNewTweet = (req, res) => {
        const newTweet = {
            _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "ReactJS Node JS",
            "verified": false,
            "handle": "ReactJS Node JS",
            "time": "2h",
            "avatar": "https://en.wikipedia.org/wiki/React_(JavaScript_library)#/media/File:React-icon.svg",
            "image": "https://image.shutterstock.com/z/stock-photo-linking-entities-networking-social-media-sns-internet-communication-abstract-small-network-588813473.jpg",
            "reply": 123,
            "retweet": 234,
            "like": 345,
            "liked": false,
            ...req.body,
        }
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }

    app.post('/api/tweets', postNewTweet);

    const deleteTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.filter(tweet =>
            tweet._id.toString() != id
        );
        res.sendStatus(200);
    }
    app.delete('/api/tweets/:id', deleteTweet);

    const likeTweet = (req, res) => {
        const id = req.params['id'];
        tweets = tweets.map(tweet => {
            if (tweet._id.toString() === id) {
                if (tweet.liked === true) {
                    tweet.liked = false;
                    tweet.like--;
                } else {
                    tweet.liked = true;
                    tweet.like++;
                }
                return tweet;
            } else {
                return tweet;
            }
        });
        res.sendStatus(200);
    }
    app.put('/api/tweets/:id/like', likeTweet);

};


