const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require('lodash')

const router = express.Router();
router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
 console.log(lodash.chunk(['January','February','march','april','may','june','july','august','september','october','novemeber','december'],4))
 console.log(lodash.tail([1,3,5,7,9,11,13,15,17,19]))
 console.log(lodash.union([2], [1, 2] , [2,3,4], [1,3,2,5] , [4,5,6,7]))
 console.log(lodash.fromPairs([['a', 1], ['b', 2] , ['c',3]]))
  
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/movies', function(req, res){
    let movies=['KGF', 'RRR', 'PUSHPA']
    
    res.send(movies)
})
router.get('/movie/:index', function(req, res){
    let movies=['KGF', 'RRR', 'PUSHPA']
    
    console.log('movie name is '+ movies[req.params.index])
    res.send(movies[req.params.index])
})
router.get('/moviez/:indexNumber', function(req, res){
    let movies=['KGF', 'RRR', 'PUSHPA']
    if(req.params.indexNumber>=movies.length){
    res.send("Use right index")}
    else{
        res.send(movies[req.params.indexNumber])
    }
    
    
})
router.get('/films', function (req, res) {
   let movies= [{
        "id": 0,
        "name": "The Shining"
       }, {
        "id": 1,
        "name": "Incendies"
       }, {
        "id": 2,
        "name": "Rang de Basanti"
       }, {
        "id": 3,
        "name": "Finding Nemo"
       }]
       
       res.send(movies)
   });
   router.get('/film/:id', function (req, res) {
    let movies= [{
         "id" : 0,
         "name": "The Shining"
        }, {
         "id": 1,
         "name": "Incendies"
        }, {
         "id": 2,
         "name": "Rang de Basanti"
        }, {
         "id": 3,
         "name": "Finding Nemo"
        }]
        let ids = req.params.id;
           
  
          
  
            for (var i = 0; i < movies.length; i++) {
                if (movies[i].id == ids) {
                    res.send(movies[i])
                   
                }
                else
                { res.send('No movie with this id')}
            }
            
        
       
    });





module.exports = router;
// adding this comment for no reason