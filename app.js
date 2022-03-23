//this is my main js file

const express = require('express');
const app = express();
let port = 3000;

let songs = {songs:[{  
id: 0,
name:"19",
publishDate:"2008",
imgURL:"https://i.ytimg.com/vi/X5reT61RE6U/hqdefault.jpg",

songTitles:["Daydreamer","Best for Last", "Chasing Pavements", "Cold Shoulder", "Crazy for You", "Melt My Heart To Stone", "First Love", "Right as Rain", "Make You Feel My Love"]
},
{  
id: 1,
name:"21",
description:"2011",
imgURL:"https://m.media-amazon.com/images/I/71Ln3JLWyOL._SL1500_.jpg",

songTitles:["Don't you Remember","Rolling in the Deep", "Turning Tables", "He Won't Go", "One and Only", "Set Fire To The Rain", "Take It All", "Rumour Has It", "I Found a Boy", "I'll Be Waiting", "Someone Like You", "Lovesong"]
},
{
id: 2,
name:"25",
description:"2015",
imgURL:"https://www.mcgilltribune.com/wp-content/uploads/2015/11/19024136-mmmain.jpg",

songTitles:["Hello","When We Were Young", "River Lea", "Send My Love", "Remedy", "Love in the Dark", "I miss you", "Water Under the Bridge", "Million Years Ago"]
},
{
id: 3,  
name:"30",
description:"2021",
imgURL:"https://media.pitchfork.com/photos/6168c994f35a939c8bee40bf/1:1/w_600/COVER_no-text_10X10_RGB.jpg",

songTitles:["Strangers by Nature","Easy on Me", "My Little Love", "Cry Your Heart Out", "Oh My God", "Can I Get It", "I Drink Wine", "All Night Parking (interlude)", "Woman Like Me", "Hold On", "To Be Loved", "Love Is a Game"]
}
]}

//{songs: [{},{},{}]

//localhost:3000/

app.get('/', (req, res) =>{
    res.send(`
    <h1>Adele</h1>
    
    <p>
    Adele (full name Adele Laurie Blue Adkins) is a multiple Grammy award-winning singer-songwriter from London. Her career started in 2006 upon graduating from the Brit School for performing arts. After a three-track demo was posted online she was quickly signed to XL Recordings, leading to the release of her breakthrough track Hometown Glory in 2007. She has topped global charts with her albums 19, 21 and 25, and also performed the theme song to the James Bond film Skyfall in 2012. 
    </p>

    <a href="/cds"> Albums</a></br></br>

    <img src="https://api.time.com/wp-content/uploads/2015/10/adele-evolution-grammy.jpg" height="400px">

    <img src="https://www.nme.com/wp-content/uploads/2016/09/Adele2PA290911-696x488.jpg" height="400px">

    `)
})

/* <img src="https://www.hellomagazine.com/imagenes/celebrities/2020101999272/adele-announces-exciting-comeback/0-475-342/adele-z.jpg" height="400px">

<img src="/images/adele-awards.jpg" width="400px">
<img src="/images/adele-awards.jpg" width="400px"> 

localhost:3000/songs */

app.get('/cds', (req, res) =>{
    res.send(`
    <h1>All Albums</h1>
    
    <ul>
        <li><a href="/albums/0"> 19</a></li>
        <li><a href="/albums/1"> 21</a></li>
        <li><a href="/albums/2"> 25</a></li>
        <li><a href="/albums/3"> 30</a></li>
    </ul>
    `)
})


//localhost:3000/albums

app.get('/albums/:id', (req, res) =>{
    let id = req.params.id;
    let name = songs.songs[id].name;
    let imgURL = songs.songs[id].imgURL;
    let songTitles = songs.songs[id].songTitles;

    let songTitlesLi = "";
    songTitles.forEach(songTitle => songTitlesLi +=`<li>${songTitle}</li>\n`)

    res.send(`
        <h1>All Albums</h1>
        
        <ul>
            <li><a href="/albums/0"> 19</a></li>
            <li><a href="/albums/1"> 21</a></li>
            <li><a href="/albums/2"> 25</a></li>
            <li><a href="/albums/3"> 30</a></li>
        </ul>


        <h2>Album name: ${name}</h2>

        <h2>Songs:</h2> 

        <ul>
            ${songTitlesLi}
        </ul>

        <img src="${imgURL}" width="400px">
    `)
})



app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
