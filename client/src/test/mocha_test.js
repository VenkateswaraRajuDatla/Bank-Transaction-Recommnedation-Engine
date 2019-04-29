let URL = '';
//console.info('cur env: ' + process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'test':
  case 'prod':
  case 'production':
    URL = 'http://127.0.0.1:3001';
    break;
  default:
    URL = 'http://127.0.0.1:3001';
}

let blockchainURL = '';
// console.info('cur env: ' + process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'test':
  case 'prod':
  case 'production':
    blockchainURL = 'http://127.0.0.1:3002';
    break;
  default:
    blockchainURL = 'http://127.0.0.1:3002';
}

let FLASK_URL = '';
// console.info('cur env: ' + process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case 'test':
  case 'prod':
  case 'production':
    FLASK_URL = "http://127.0.0.1:5000";
    break;
  default:
    FLASK_URL = "http://127.0.0.1:5000";
}

let should = require('chai').should();
let expect = require('chai').expect;
let supertest = require("supertest");
let api = supertest(URL) ;
let api_blockchain = supertest(blockchainURL) ;
let api_flask = supertest(FLASK_URL)
let assert = require('assert');
let express = require('express');
let _ = require('underscore');




describe("Login", function(){
    it('Login test with valid credentials', function (done) {
        api.post('/signin')
            // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({
                username:"danderayal@gmail.com",
                password:'123'
            })
            .expect(200)
            .end(function (err,res) {
                let obj = JSON.parse(res.text);
                console.log(obj[0].userType)
                expect(res.status).to.equal(200);
                expect(obj[0].userType).to.equal('user');
                expect(obj[0].firstname).to.equal('Rishith');
                done();
            })
    });
});


describe("Login", function(){
    it('Login test with bad credentials', function (done) {
        api.post('/signin')
            // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({
                username:"danrayal@gmail.com",
                password:'123'
            })
            .expect(200)
            .end(function (err,res) {
                expect(res.status).to.equal(401);
                done();
            })
    });
});

describe("Sign Up", function(){
    it('Sign Up test with credentials', function (done) {
        api.post('/signin')
            // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({
                username:"danrayal@gmail.com",
                password:'123'
            })
            .expect(200)
            .end(function (err,res) {
                expect(res.status).to.equal(401);
                done();
            })
    });
});
describe("Sign Up", function(){
    it('Sign Up test with bad credentials', function (done) {
        api.post('/signin')
            // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({
                username:"danrayal@gmail.com",
                password:'123'
            })
            .expect(200)
            .end(function (err,res) {
                expect(res.status).to.equal(401);
                done();
            })
    });
});

describe("Mine Block", function(){
    it('Mining a block test ', function (done) {
        api.post('/signin')
            // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({
                username:"danrayal@gmail.com",
                password:'123'
            })
            .expect(200)
            .end(function (err,res) {
                expect(res.status).to.equal(401);
                done();
            })
    });
});

describe("Loan Prediction", function(){
    it('Loan Prediction test with valid details', function (done) {
        api.post('/signin')
            // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({
                username:"danrayal@gmail.com",
                password:'123'
            })
            .expect(200)
            .end(function (err,res) {
                expect(res.status).to.equal(401);
                done();
            })
    });
});

describe("Loan Prediction", function(){
    it('Loan Prediction test with invalid details', function (done) {
        api.post('/signin')
            // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({
                username:"danrayal@gmail.com",
                password:'123'
            })
            .expect(200)
            .end(function (err,res) {
                expect(res.status).to.equal(401);
                done();
            })
    });
});


describe("Bank Influx Prediction", function(){
    it('Bank Influx Prediction test with valid data file', function (done) {
        api.post('/signin')
            // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({
                username:"danrayal@gmail.com",
                password:'123'
            })
            .expect(200)
            .end(function (err,res) {
                expect(res.status).to.equal(401);
                done();
            })
    });
});

describe("Bank Influx Prediction", function(){
    it('Bank Influx Prediction test with invalid data file', function (done) {
        api.post('/signin')
            // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({
                username:"danrayal@gmail.com",
                password:'123'
            })
            .expect(200)
            .end(function (err,res) {
                expect(res.status).to.equal(401);
                done();
            })
    });
});

describe("Block chain upload", function(){
    it('Block chain upload test with valid data file', function (done) {
        api.post('/signin')
            // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({
                username:"danrayal@gmail.com",
                password:'123'
            })
            .expect(200)
            .end(function (err,res) {
                expect(res.status).to.equal(401);
                done();
            })
    });
});

describe("Block chain upload", function(){
    it('Block chain upload test with invalid data file', function (done) {
        api.post('/signin')
            // .set('Accept', 'application/x-www-form-urlencoded')
            .set('Accept', 'application/json')
            .send({
                username:"danrayal@gmail.com",
                password:'123'
            })
            .expect(200)
            .end(function (err,res) {
                expect(res.status).to.equal(401);
                done();
            })
    });
});
