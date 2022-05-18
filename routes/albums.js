//1. import express
const express = require('express'); //this is same as app.js file


//2. invoke the express sub-router on the object that is already in the project
const router = express.Router()   //note we are using the variable name 'router' instead of 'app' and it's express.Router because we are creating a sub route

//*****removed below data and put into data.json file-added require underneath */
// let songs = {songs:[{  
//     id: 0,
//     name:"19",
//     publishDate:"2008",
//     imgURL:"https://i.ytimg.com/vi/X5reT61RE6U/hqdefault.jpg",
    
//     songTitles:["Daydreamer","Best for Last", "Chasing Pavements", "Cold Shoulder", "Crazy for You", "Melt My Heart To Stone", "First Love", "Right as Rain", "Make You Feel My Love"]
//     },
//     {  
//     id: 1,
//     name:"21",
//     description:"2011",
//     imgURL:"https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg",
    
//     songTitles:["Don't you Remember","Rolling in the Deep", "Turning Tables", "He Won't Go", "One and Only", "Set Fire To The Rain", "Take It All", "Rumour Has It", "I Found a Boy", "I'll Be Waiting", "Someone Like You", "Lovesong"]
//     },
//     {
//     id: 2,
//     name:"25",
//     description:"2015",
//     imgURL:"https://www.mcgilltribune.com/wp-content/uploads/2015/11/19024136-mmmain.jpg",
    
//     songTitles:["Hello","When We Were Young", "River Lea", "Send My Love", "Remedy", "Love in the Dark", "I miss you", "Water Under the Bridge", "Million Years Ago"]
//     },
//     {
//     id: 3,  
//     name:"30",
//     description:"2021",
//     imgURL:"https://media.pitchfork.com/photos/6168c994f35a939c8bee40bf/1:1/w_600/COVER_no-text_10X10_RGB.jpg",
    
//     songTitles:["Strangers by Nature","Easy on Me", "My Little Love", "Cry Your Heart Out", "Oh My God", "Can I Get It", "I Drink Wine", "All Night Parking (interlude)", "Woman Like Me", "Hold On", "To Be Loved", "Love Is a Game"]
//     }
//     ]}

//import data from data.json
let songs = require('../data/data.json')  //js converts json to object
    //{songs: [{},{},{}]


    

router.get('/albums/:id', (req, res) =>{   //note we are using router.get i/o app.get bc this is a 'sub-router'


    let id = req.params.id;
    let name = songs.songs[id].name;
    let imgURL = songs.songs[id].imgURL;

    let songTitles = songs.songs[id].songTitles;

    let songTitlesLi = "";
    songTitles.forEach(songTitle => songTitlesLi +=`<li>${songTitle}</li>\n`)

    res.render('albums', {   //render ONLY works with ejs files, no need to add .ejs bc it's looking in the 'views folder' so it knows it's an index.ejs file
        songTitlesLi,
        imgURL,
        name, 
    })  

    
    // res.send(`
    //     <h1>All Albums</h1>
        
    //     <ul>
    //         <li><a href="/albums/0"> 19</a></li>
    //         <li><a href="/albums/1"> 21</a></li>
    //         <li><a href="/albums/2"> 25</a></li>
    //         <li><a href="/albums/3"> 30</a></li>
    //     </ul>


    //     <h2>Album name: ${name}</h2>

    //     <h2>Songs:</h2> 

    //     <ul>
    //         ${songTitlesLi}
    //     </ul>

    //     <img src="${imgURL}" width="400px">
    // `)



})

//3. export the handler (sub route)- just like in a normal node project we need to export it just like a module
module.exports = router;
