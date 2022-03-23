//this is my main js file

const express = require('express');
const app = express();
let port = 3000;

let songs = [{  
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
 }
 {  
    name:"25",
    description:"2015",
    imgURL:"images/adele-25.jpg",

   songTitles:["Hello","When We Were Young", "River Lea", "Send My Love", "Remedy", "Love in the Dark", "I miss you", "Water Under the Bridge", "Million Years Ago"]
 }
 {  
    name:"30",
    description:"2021",
    imgURL:"images/adele-30.jpg",

   songTitles:["Strangers by Nature","Easy on Me", "My Little Love", "Cry Your Heart Out", "Oh My God", "Can I Get It", "I Drink Wine", "All Night Parking (interlude)", "Woman Like Me", "Hold On", "To Be Loved", "Love Is a Game"]
 }
]

app.get('/' (req, res)=>{
    res.send("Hello World")
  })

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})