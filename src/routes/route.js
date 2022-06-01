const express = require('express');
const welcomeModule = require('../logger/logger.js')
const helperModule = require('../util/helper.js')
const validatorModule = require('../validator/formatter.js')

const router = express.Router();

router.get('/test-me', function (req, res) {
    
    welcomeModule.welcome()
    helperModule.printDate()
    helperModule.printMonth()
    helperModule.printBatch()
    validatorModule.trim()
    validatorModule.upperCase()
    validatorModule.lowerCase()
    
    res.send('This is My First ever API')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason