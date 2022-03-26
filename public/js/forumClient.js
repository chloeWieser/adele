//pasted from slack
let form = document.querySelector('form')


form.addEventListener('submit', async (e) =>{
    //prevent default behavour of the form 
    e.preventDefault()

    //make a fetch /api

    let newMessage = {
        name: document.querySelector('#forum-form-name').value, 
        title: document.querySelector('#forum-form-title').value, 
        message: document.querySelector('#forum-form-message').value
    }

    let results = await fetch('/api', {
        method: "POST", 
        headers: {'Content-type': 'application/json; charset=UTF-8'}, 
        body: JSON.stringify(newMessage)
    })

    let messages = await results.json() //[{}, {}, {}]
    updateforum(messages)

})





//added this file to render the messiges in the front end

//pass in an array of objects to this function
const displayMessages = async () => {
    
    let result = await fetch ('/api');
    let messages = await result.json(); //[{}, {}, {}]

    updateforum(messages)
};



const updateforum = (messagesArr) => {
    let htmlBlock = "";
    messagesArr.forEach((item, key) =>{   //item is each object in the array

        htmlBlock += '     <div class="forum-item item-list media-list">';
        htmlBlock += '       <div class="forum-item media">';
        htmlBlock += '       <div class="media-left"><button class="forum-delete btn btn-xs btn-danger"><span id="' + key + '" class="glyphicon glyphicon-remove"></span></button></div>';
        htmlBlock += '         <div class="forum-info media-body">';
        htmlBlock += '           <div class="forum-head">';
        htmlBlock += '             <div class="forum-title">' + item.title + ' <small class="forum-name label label-info">' + item.name + '</small></div>';
        htmlBlock += '           </div>';
        htmlBlock += '           <div class="forum-message">' + item.message + '</div>';
        htmlBlock += '         </div>'; 
        htmlBlock += '       </div>';
        htmlBlock += '     </div>';
    })
    
    //attach to a dom element
    let forumMessages = document.querySelector('.forum-messages');
    forumMessages.innerHTML = htmlBlock;
}

displayMessages()