//import * as crypto from "crypto";
var moment = require('moment');
var crypto = require('crypto');

class Blockchain {
    constructor () {
        // Create chain and transaction
        this.chain = []
        this.current_transactions = []

        // Binding of this
        this.newBlock = this.newBlock.bind(this)
        this.newTransaction = this.newTransaction.bind(this)
        this.lastBlock = this.lastBlock.bind(this)
        this.proofOfWork = this.proofOfWork.bind(this)
        this.validProof= this.validProof.bind(this);
        this.proofOfWork=this.proofOfWork.bind(this);
         this.newBlock("c4ff2","uriyewrhkj");

    }

    newBlock (proof, previousHash) {
        const block = {
            index: this.chain.length + 1,
            timestamp: new Date(),
            transactions: this.current_transactions,
            proof: proof,
            previous_hash: previousHash
        }
        this.current_transactions = []
        this.chain.push(block)
        return block
    }

    newTransaction (sender, recipient, amount,timestamp) {
        this.current_transactions.push({
            sender: sender,
            recipient: recipient,
            amount: amount,
            timestamp: timestamp
        });
        return this.lastBlock() + 1
    }

    validProof (lastProof, proof) {
        const guessHash = crypto.createHmac("sha256","pranithkouda")
            .update(`${lastProof}${proof}`)
            .digest('hex')
        //console.log(guessHash);
        return guessHash.substr(0, 5) === "c4ff3"
        //return true;
    }

    proofOfWork (lastProof) {
        let proof = 0;
        while (true) {
            if (!this.validProof(lastProof, proof)) {
               // console.log(lastProof);
               console.log(proof);
                proof+=1;
            } else {
                break
            }
        }
        return proof
    }

    hash (block) {
        const blockString = JSON.stringify(block)
        const hash = crypto.createHmac("sha256", "pranithkouda")
            .update(blockString)
            .digest('hex')

        return hash
    }

    lastBlock () {
        return this.chain.slice(-1)[0]
    }
}

module.exports = Blockchain;