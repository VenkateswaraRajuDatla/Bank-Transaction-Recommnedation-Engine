var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
//Models
var router = express.Router();
var user = require('./routes/users');
var mongoSessionURL = "mongodb://cmpe273:sreedevi@ds149613.mlab.com:49613/fandango";
var expressSessions = require("express-session");
var mongoStore = require("connect-mongo")(expressSessions);
var app = express();

var corsOptions = {
    origin: true,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    exposedHeaders: ['x-auth-token'],
    optionsSuccessStatus: 200// some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors(corsOptions));
var options = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'users',
    port: 3306
};

app.use(expressSessions({
    secret: 'CMPE273_fandango',
    cookie: {secure: false},
    httpOnly: true,
    secure: false,
    maxAge: null,
    duration: 30 * 60 * 1000,    //setting the time for active session
    activeDuration: 5 * 60 * 1000,
    resave: false,
    store: new mongoStore({
        url: mongoSessionURL
    }),
    saveUninitialized: false,
    unset: 'destroy'
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// });
app.use('/', user);//satish
// app.use('/blockchain', blockchainRoutes);  pranith's server
// catch 404 and forward to error handlers
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



module.exports = app;
