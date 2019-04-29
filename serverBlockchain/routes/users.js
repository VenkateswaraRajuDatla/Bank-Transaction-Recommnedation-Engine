var express = require('express');
var router = express.Router();
var passport = require('passport');
//var kafka = require('../kafka/client');
var mysql = require('./mysql');
var multer = require('multer');
const format  = require('string-format');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        cb(null, req.user.user.email + '-' + Date.now() + '.jpeg')
    }
});

var upload = multer({storage: storage});

var type = upload.single('mypic');




router.get('/', function (req, res) {
    console.log("Home Request Coming");
    res.status(200).json({message: "Status OK"});

});


router.post('/signin', function (req, res, next) {
    console.log("from node " + req);
    console.log(req.body);
    var getUser = "select * from userInfo where email='" +req.body["username"] + "' and password='" + req.body["password"] + "'";
    mysql.fetchData(function (err, results) {
        if (err) {
            console.log(
                err
            );
            throw err;
        }
        else {
            if (results.length > 0) {
                req.session.username=req.param("username");
                console.log(results);
                res.status(200);
                res.data=results;
                console.log(res);
                res.send(results);
                //  res.send("login success");
            }
            else {
                res.status(401);
                res.send("password not working");
            }

        }

    }, getUser);
        console.log("trying to fetch data4");

});

// currently working

router.post('/signup', function (req, res) {
console.log(req.body.username);
var insertUser = "INSERT INTO userInfo ({username}) VALUES ({password})";
console.log(format(insertUser, req.body));

});

router.get('/userDetails', function (req, res) {
    kafka.make_request('userDetails', {"email": req.session.email}, function (err, results) {
        console.log('in result');
        console.log(results.user);
        if (err) {
            res.status(401).json({message: "Unexpected error occured"});
        }
        else {
            if (results.code === 201) {
                console.log("Inside the success criteria");
                res.status(201).json({message: "User details retrieved successfully", user: results.user});
            }
            else {
                res.status(401).json({message: "user details not available"});

            }
        }
    });

});







router.get('/signout', function (req, res) {
    console.log("Authenticated:", req.user);

    req.logout();
    req.session.destroy(function (err) {
        if (!err) {
            res.status(201).clearCookie('connect.sid').json({message: "Success"});
        } else {
            // handle error case...
        }
    });

});




module.exports = router;
