const Blockchain = require('./blockchain')
const { validationResult } = require('express-validator/check')

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
        this.blockchain.newTransaction('0', "First Node", 1)

        // Forge the new Block by adding it to the chain
        const previousHash = this.blockchain.hash(lastProof)
        const newBlock = this.blockchain.newBlock(proof, previousHash)

        const responseValue = Object.assign({
            message: 'New Block mined'
        }, newBlock)
        req.responseValue = responseValue
        return next()
    }
    mineLocal () {
        const lastBlock = this.blockchain.lastBlock();
        const lastProof = lastBlock.proof;
        const proof = this.blockchain.proofOfWork(lastProof);

        // Create a new transaction with from 0 (this node) to our node (NODE_NAME) of 1 Chiccocoin
        this.blockchain.newTransaction('0', "First Node", 1)

        // Forge the new Block by adding it to the chain
        const previousHash = this.blockchain.hash(lastProof)
        const newBlock = this.blockchain.newBlock(proof, previousHash)
        console.log(this.blockchain.chain);
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
    newTransactionLocal (sender,recipient,amount) {
        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //     return res.status(422).json({ errors: errors.mapped() })
        // }
        // const trans = req.body
        const index = this.blockchain.newTransaction(sender, recipient, amount);
        // const responseValue = {
        //     message: `Transaction will be added to Block ${index}`
        // }
        // req.responseValue = responseValue
        // return next()
    }
}

module.exports = new Ledger();