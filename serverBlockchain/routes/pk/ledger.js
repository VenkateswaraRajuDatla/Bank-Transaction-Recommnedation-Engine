var MongoConPool = require("../../services/monogpool");
var moment = require('moment');
//var randomInt = require('random-int');
var MongoClient = require('mongodb').MongoClient;
const Blockchain = require('./blockchain');
const { validationResult } = require('express-validator/check');


class Ledger {
    constructor () {
        this.blockchain = new Blockchain();
        this.getChain = this.getChain.bind(this);
        this.mine = this.mine.bind(this);
        this.newTransaction = this.newTransaction.bind(this);
        this.newTransactionLocal=this.newTransactionLocal.bind(this);
        this.mineLocal=this.mineLocal.bind(this);
        this.getChainlocal=this.getChainlocal.bind(this);
    }
    getChain (req, res, next) {
        req.responseValue = {
            message: 'Get Chain',
            chain: this.blockchain.chain
        }
        return next()
    }
    getChainlocal () {
        // req.responseValue = {
        //     message: 'Get Chain',
        //     chain: this.blockchain.chain
        // }
        return this.blockchain.chain;
    }

    mine (req, res, next) {
        const lastBlock = this.blockchain.lastBlock();
        const lastProof = lastBlock.proof;
        const proof = this.blockchain.proofOfWork(lastProof);

        // Create a new transaction with from 0 (this node) to our node (NODE_NAME) of 1 Chiccocoin
        this.blockchain.newTransaction('0', "First Node", 1);

        // Forge the new Block by adding it to the chain
        const previousHash = this.blockchain.hash(lastProof)
        const newBlock = this.blockchain.newBlock(proof, previousHash)

        const responseValue = Object.assign({
            message: 'New Block mined'
        }, newBlock)
        req.responseValue = responseValue
        return next()
    }
    mineLocal (timeStamp) {
        const lastBlock = this.blockchain.lastBlock();
        const lastProof = lastBlock.proof;
        const proof = this.blockchain.proofOfWork(lastProof);

         this.blockchain.newTransaction('0', "First Node", 1);

        // Forge the new Block by adding it to the chain
        const previousHash = this.blockchain.hash(lastProof);
        const newBlock = this.blockchain.newBlock(proof, previousHash);
        console.log("newblock------------------------------------------------");
        console.log(newBlock);
        let queryJson= {
            "timestamp":timeStamp
        };

        let updateJson={
            $set:{
                "proofOfWork":newBlock.proof,
                "prev_hash":newBlock.previous_hash
            }
        };
        console.log("updating trans with proof------------------------------------------------");
        console.log(updateJson);

        MongoConPool.updateMany('blockchain',queryJson,updateJson,function (err, transactions) {
            if (err) {
                res.code = "401";
                //callback(null, res);
            }
            else {
                console.log("-------------updated coll with proof of work-----------------------------------");
                console.log(transactions);
                console.log("------------------------------------------------");



                // callback(null, res);
            }
        });
        MongoConPool.updateOne('blockchain',queryJson,updateJson,function (err, transactions) {
            if (err) {
                res.code = "401";
                //callback(null, res);
            }
            else {
                console.log("-------------updated coll with proof of work-----------------------------------");
                console.log(transactions);
                console.log("------------------------------------------------");



                // callback(null, res);
            }
        });

        //console.log(this.blockchain.chain);
       /* const responseValue = Object.assign({
            message: 'New Block mined'
        }, newBlock)
        req.responseValue = responseValue
        return next()*/
    }

    newTransaction (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.mapped() })
        }
        const trans = req.body
        const index = this.blockchain.newTransaction(trans['sender'], trans['recipient'], trans['amount'])
        const responseValue = {
            message: `Transaction will be added to Block ${index}`
        }
        req.responseValue = responseValue
        return next()
    }
    newTransactionLocal (sender,recipient,amount,timestamp) {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(422).json({ errors: errors.mapped() })
        // }
        // const trans = req.body
        const index = this.blockchain.newTransaction(sender, recipient, amount, timestamp);
        // const responseValue = {
        //     message: `Transaction will be added to Block ${index}`
        // }
        // req.responseValue = responseValue
        // return next()
    }
}

module.exports = new Ledger();