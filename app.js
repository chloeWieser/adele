//this is my main js file

const express = require('express');
const app = express();
let port = 3000;

let songs = {songs:[{  
name:"19",
publishDate:"2008",
imgURL:"images/adele-19.jpg",

songTitles:["Daydreamer","Best for Last", "Chasing Pavements", "Cold Shoulder", "Crazy for You", "Melt My Heart To Stone", "First Love", "Right as Rain", "Make You Feel My Love"]
},
{  
name:"21",
description:"2011",
imgURL:"images/adele-21.jpg",

songTitles:["Don't you Remember","Rolling in the Deep", "Turning Tables", "He Won't Go", "One and Only", "Set Fire To The Rain", "Take It All", "Rumour Has It", "I Found a Boy", "I'll Be Waiting", "Someone Like You", "Lovesong"]
},
{  
name:"25",
description:"2015",
imgURL:"images/adele-25.jpg",

songTitles:["Hello","When We Were Young", "River Lea", "Send My Love", "Remedy", "Love in the Dark", "I miss you", "Water Under the Bridge", "Million Years Ago"]
},
{  
name:"30",
description:"2021",
imgURL:"images/adele-30.jpg",

songTitles:["Strangers by Nature","Easy on Me", "My Little Love", "Cry Your Heart Out", "Oh My God", "Can I Get It", "I Drink Wine", "All Night Parking (interlude)", "Woman Like Me", "Hold On", "To Be Loved", "Love Is a Game"]
}
]}

//{data: [{},{},{}]

//localhost:3000/

app.get('/', (req, res) =>{
    res.send(`<h1>Adele</h1>
    
    <p>
    Adele (full name Adele Laurie Blue Adkins) is a multiple Grammy award-winning singer-songwriter from London. Her career started in 2006 upon graduating from the Brit School for performing arts. After a three-track demo was posted online she was quickly signed to XL Recordings, leading to the release of her breakthrough track Hometown Glory in 2007. She has topped global charts with her albums 19, 21 and 25, and also performed the theme song to the James Bond film Skyfall in 2012. 
    </p>

    <img src="images/adele-awards.jpg" width="400px">
    `)
})

//localhost:3000/songs

app.get('/songs', (req, res) =>{
    res.send(`<h1>Adele</h1>
    
    <ul>
        <li><a href="/songs/0"> 19</a></li>
        <li><a href="/songs/0"> 21</a></li>
        <li><a href="/songs/0"> 25</a></li>
        <li><a href="/songs/0"> 30</a></li>
    </ul>
    `)
})


//localhost:3000/songs/1

app.get('/songs/:id', (req, res) =>{
    let id = req.params.id;
    let name = data.data[id].name;
    let imgURL = data.data[id].img;

    res.send(`

        <ul>
        <li><a href="/dogs/0"> Golden Retriever</a></li>
        <li><a href="/dogs/1"> Lab</a></li>
        <li><a href="/dogs/2"> Pug</a></li>
        <li><a href="/dogs/3"> Poodle</a></li>
        </ul>

        <h1>${name}</h1>
        <img src="${imgURL}" width="400px">
    `)
})



app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
