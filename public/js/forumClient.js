
let form = document.querySelector('form')
let posts = document.querySelector('.posts') ///(added 3.27)

form.addEventListener('submit', async (e) =>{
    //prevent default behavour of the form 
    e.preventDefault()

    let newMessage = {
        name: document.querySelector('#name').value, 
        title: document.querySelector('#title').value, 
        message: document.querySelector('#message').value
    }

        //make a fetch /api
    let results = await fetch('/api', {
        method: "POST", 
        headers: {'Content-type': 'application/json; charset=UTF-8'}, 
        body: JSON.stringify(newMessage)
    })

    let messages = await results.json() //[{}, {}, {}]
    updateforum(messages)

})


//added this file to render the messeges in the front end

//pass in an array of objects to this function
const displayMessages = async () => {
    
    let result = await fetch ('/api');
    let messages = await result.json(); //[{}, {}, {}]

    updateforum(messages)
};

const updateforum = (messagesArr) => {
    let htmlBlock = "";
    messagesArr.forEach((item, key) =>{   //item is each object in the array

        htmlBlock += '     <div class="post-item item-list media-list">';
        htmlBlock += '       <div class="post-item media">';
        htmlBlock += '       <div><button class="post-delete fa-regular fa-trash-can"><span id="' + key + '"></span></button></div>';
        htmlBlock += '         <div class="post-info media-body">';
        htmlBlock += '           <div class="post-head">';
        htmlBlock += '             <div class="post-title">' + item.title + ' <small class="post-name label label-info">' + item.name + '</small></div>';
        htmlBlock += '           </div>';
        htmlBlock += '           <div class="post">' + item.message + '</div>';
        htmlBlock += '         </div>'; 
        htmlBlock += '       </div>';
        htmlBlock += '     </div>';
    })
    
    //attach to a dom element
    let forumMessages = document.querySelector('.posts');
    forumMessages.innerHTML = htmlBlock;


    

    // Added 3.27
    let postDelete = document.querySelectorAll('.post-delete');
    postDelete.forEach(deleteButton => deleteButton.addEventListener('click', deletePost))
}

const deletePost = async (e) =>{ //(added 3.27)
    //prevent default behavour of the form 
    e.preventDefault()
    let idSpan = e.target.querySelector('span');
    let id = idSpan.id

    // make a fetch /api
    let results = await fetch('/api', {
        method: "DELETE", 
        headers: {'Content-type': 'application/json; charset=UTF-8'}, 
        body: JSON.stringify({ id })
    })

    let messages = await results.json() //[{}, {}, {}]
    updateforum(messages);
}




// const deleteFromForum = (messagesArr) => {
//     let htmlBlock = "";
//     messagesArr.forEach((item, key) =>{   //item is each object in the array

//         htmlBlock -= '     <div class="post-item item-list media-list">';
//         htmlBlock -= '       <div class="post-item media">';
//         htmlBlock -= '       <div><button class="post-delete fa-regular fa-trash-can"><span id="' + key + '"></span></button></div>';
//         htmlBlock -= '         <div class="post-info media-body">';
//         htmlBlock -= '           <div class="post-head">';
//         htmlBlock -= '             <div class="post-title">' + item.title + ' <small class="post-name label label-info">' + item.name + '</small></div>';
//         htmlBlock -= '           </div>';
//         htmlBlock -= '           <div class="post">' + item.message + '</div>';
//         htmlBlock -= '         </div>'; 
//         htmlBlock -= '       </div>';
//         htmlBlock -= '     </div>';
//     })
    
//     //attach to a dom element
//     let forumMessages = document.querySelector('.posts');
//     forumMessages.innerHTML = htmlBlock;
// }



displayMessages()