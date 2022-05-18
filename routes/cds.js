//1. import express
const express = require('express'); //this is same as app.js file


//2. invoke the express sub-router on the object that is already in the project
const router = express.Router()   //note we are using the variable name 'router' instead of 'app' and it's express.Router because we are creating a sub route

router.get('/cds', (req, res) =>{ //note we are using router.get i/o app.get bc this is a 'sub-router'

    // replacing below res.send with res.render so it can connect from ejs file:
    res.render('cds', {   //render ONLY works with ejs files, no need to add .ejs bc it's looking in the 'views folder' so it knows it's an index.ejs file

    })  

    // res.send(`
    // <h1>All Albums</h1>
    
    // <ul>
    //     <li><a href="/albums/0"> 19</a></li>
    //     <li><a href="/albums/1"> 21</a></li>
    //     <li><a href="/albums/2"> 25</a></li>
    //     <li><a href="/albums/3"> 30</a></li>
    // </ul>
    // `)
})



//3. export the handler (sub route)- just like in a normal node project we need to export it just like a module
module.exports = router;
