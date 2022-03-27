//this is my main js file

const express = require('express');
const app = express();
let port = 3000;
//above creates node project along with the 'listen on port' at bottom of file and the app.get 'route handler' with some page contents to send as a response to the browser


app.use(express.static('public')) //add to reference static assets in public folder

app.set('view engine', 'ejs')   //add to reference view folder- then make the ejs file

//localhost:3000/

//***********3.23 evening removed homepage content to move it over to the js file in the routes folder & added the app.use below

app.use(require('./routes/index'))  //this brings back the index route BACK into the app instance



// localhost:3000/cds 

//***********3.23 evening removed cds content to move it over to the js file in the routes folder & added the app.use below

app.use(require('./routes/cds'))  //this brings back the songs route BACK into the app instance



//localhost:3000/albums/id

//***********3.23 evening removed albums content to move it over to the js file in the routes folder & added the app.use below

app.use(require('./routes/albums'))  



// localhost:3000/forum

app.use(require('./routes/forum')) 



app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})
