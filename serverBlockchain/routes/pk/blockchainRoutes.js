var express = require('express');
var router = express.Router();
var passport = require('passport');
var Ledger = require('./ledger');
//var kafka = require('../kafka/client');
var mysql = require('../mysql');
var multer = require('multer');
const format  = require('string-format');
var mongo = require("../../services/mongo");
var MongoConPool = require("../../services/monogpool");
var moment = require('moment');
//var randomInt = require('random-int');
var MongoClient = require('mongodb').MongoClient;


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


router.post('/addTransactions', function (req, res, next) {
    console.log("from node " + req);
    console.log(req.body);
    console.log("transactions are added");
    res.status=200;
    res.send();
    var getUser = "select * from userInfo where email='" +req.body["username"] + "' and password='" + req.body["password"] + "'";
    // mysql.fetchData(function (err, results) {
    //     if (err) {
    //         console.log(
    //             err
    //         );
    //         throw err;
    //     }
    //     else {
    //         if (results.length > 0) {
    //             req.session.username=req.param("username");
    //             console.log(results);
    //             res.status(200);
    //             res.data=results;
    //             console.log(res);
    //             res.send(results);
    //             //  res.send("login success");
    //         }
    //         else {
    //             res.status(401);
    //             res.send("password not working");
    //         }
    //
    //     }
    //
    // }, getUser);
    // console.log("trying to fetch data4");

});
router.post('/mineBlock', function (req, res, next) {

    let rows=req.body;

    res.status=200;
    res.send();
    console.log('creating new ledger');
    // this.Ledger = new Ledger();
    console.log('first trnasa');
    var queryJsonArray = [];
    var timeStamp = moment().toISOString();
    for (let i = 1; i < rows.length; i++) {
        Ledger.newTransactionLocal(rows[i][0], rows[i][1], rows[i][2],timeStamp);

         var record ={
            'sender':rows[i][0],
            'recepient':rows[i][1],
            'amount': rows[i][2],
            'timestamp':timeStamp
        };
        queryJsonArray.push(record);
    }
    console.log('last trnasa');


    MongoConPool.insert('blockchain', queryJsonArray, function (err, movie) {
        if (err) {
            res.code = "401";
            //callback(null, res);
        }
        else {
            console.log(movie, "---------------coll inserted---------------------------------");
            res.result = movie;
            res.code = 200;
           // callback(null, res);
        }
    });
    Ledger.mineLocal(timeStamp);
    //res.send();
});
router.post('/getChain', function (req, res, next) {
    console.log("from node  printing chain");
    //console.log(Ledger.getChainlocal());
    let chainResult=Ledger.getChainlocal();
    console.log('prinitng chain trans');
    console.log(chainResult);

    // this.Ledger = new Ledger();
    res.chain=chainResult;
    res.status=200;
    //console.log(res);
    res.send(chainResult);
});
router.post('/getChainLocal', function (req, res, next) {
    console.log("from node  printing chain");
    var queryJson = {};
    let tran=[];

    MongoConPool.find('blockchain', queryJson, function (err, transactions) {
        if (err) {
            res.code = "401";
            //callback(null, res);
        }
        else {
            res.code = 200;

            res.chain=transactions;
            console.log('prinitng chain trans');
            //console.log(transactions);
            res.status=200;
            //console.log(res);
            res.send(transactions);

            //callback(null, res);
        }
    });



    // this.Ledger = new Ledger();

});



module.exports = router;