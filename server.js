// const express=require('express');
// const app=express();
// const mongoose=require('mongoose')
// const dotenv=require('dotenv');
// const routesUrls=require('./project/route');
// const cors=require('cors');
// dotenv.config();
// mongoose.connect(process.env.DATABASE_ACCESS,()=>console.log("database connected"));
//
// app.use(express.json());
// app.use(cors());
// app.use('/app',routesUrls);
// app.listen(4000,()=>console.log("server is up and running"));


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/webdev');

mongoose.connection.on('connected', ()=>console.log('connected') )
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/hello',
    (req,
     res) => {

    res.send('Hello World!!!!!');
});


require('./service/movies-service')(app);

require('./service/tweeter-service')(app);

require('./service/profile-service')(app);

require('./service/who-service')(app);

require('./movies/service')(app);

app.listen(process.env.PORT || 4000);






