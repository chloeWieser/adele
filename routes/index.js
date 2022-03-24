//1. import express
const express = require('express'); //this is same as app.js file


//2. invoke the express sub-router on the object that is already in the project
const router = express.Router()   //note we are using the variable name 'router' instead of 'app' and it's express.Router because we are creating a sub route


router.get('/', (req, res) =>{ //note we are using router.get i/o app.get bc this is a 'sub-router'    also note below that the browser/express KNOWS to look for the css folder in public folder(where all the static files are kept!)

    // replacing below res.send with res.render so it can connect from ejs file:
    res.render('index', {   //render ONLY works with ejs files, no need to add .ejs bc it's looking in the 'views folder' so it knows it's an index.ejs file
        artistName: "Adele",
        bio: "Adele (full name Adele Laurie Blue Adkins) is a multiple Grammy award-winning singer-songwriter from London. Her career started in 2006 upon graduating from the Brit School for performing arts. After a three-track demo was posted online she was quickly signed to XL Recordings, leading to the release of her breakthrough track Hometown Glory in 2007. She has topped global charts with her albums 19, 21 and 25, and also performed the theme song to the James Bond film Skyfall in 2012."
    })  


//***removed below res.send to replace with above res.render and moved all the html to the ejs file*/
    // res.send(`

    // <link rel="stylesheet" href="/css/styles.css">  

    // <body>
    // <div class="header">
    // <div class="imageContainer">
    //     <img id="headerImage" class="heroImage" src="https://i.guim.co.uk/img/media/41d4947ec3ddada63fadb4a86fcb997e8bb8920b/0_0_2000_1306/master/2000.jpg?width=620&quality=85&auto=format&fit=max&s=4a4ad2eb7392ed02cf5e7d0c323351ea" alt="">
    // </div>
    // </div>
    
    // <h1>Adele</h1>
    
    // <p>
    // Adele (full name Adele Laurie Blue Adkins) is a multiple Grammy award-winning singer-songwriter from London. Her career started in 2006 upon graduating from the Brit School for performing arts. After a three-track demo was posted online she was quickly signed to XL Recordings, leading to the release of her breakthrough track Hometown Glory in 2007. She has topped global charts with her albums 19, 21 and 25, and also performed the theme song to the James Bond film Skyfall in 2012. 
    // </p>

    // <a href="/cds"> Albums</a></br></br>



    // <img src="https://api.time.com/wp-content/uploads/2015/10/adele-evolution-grammy.jpg" height="400px">

    // <img src="https://www.nme.com/wp-content/uploads/2016/09/Adele2PA290911-696x488.jpg" height="400px">

    // </body>

    // `)
})

//3. export the handler (sub route)- just like in a normal node project we need to export it just like a module
module.exports = router;
