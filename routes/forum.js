const express = require('express');
const router = express.Router();

// bring in fs to read/write to a file
const fs = require('fs')

//api that allows us to get all the messages from the feedback.json file:
//import contents of feedback.json file
const feedbackData = require('../data/feedback.json');  //converted to json => object
console.log(feedbackData);

//ADDED AFTER THE POST need body parser to scrape the header
router.use(express.json())
router.use(express.urlencoded({extended: true}))


//FEEDBACK STRUCTURE IS AN ARRAY OF OBJECTS

router.get('/forum', (req, res)=>{

    res.render('forum', {
        // key: value,

    })
})

//MAKE API CALL TO GET ALL THE MESSAGES FROM FEEDBACK.JSON

router.get('/api', (req, res)=>{
    res.json(feedbackData)
})
//after above, if we change route to /api in browser it shows the data that we eventually want to show on the page

//submit new message
router.post('/api', (req, res)=>{
    let {name, title, message} = req.body;
    //add mssg to the json file by pushing to the javascript object, then convert onj to a json string and resave it
    //push data to feedbackData obj; actually we will do unshift so it appears at the beginning
    feedbackData.unshift(req.body);

    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', err=>{  //pass in the file we want to write to- the reference is from the top of the application data

        if(err){
            console.log(err);
        }

        console.log('feedback.json file has been updated');
})

//send back all of the messages with the new message attached
res.json(feedbackData)
})

//delete a message


module.exports = router;