
   
//file that grabs from the API
const store = require('../store.js');
const config = require('../config.js');

const createPost = function(title, text, blogId) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/posts',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data:{
            "post": {
                  "title": title,
                  "text": text,
                  "blog-id": blogId
              }
        }
    })
}

const showPost = function(id) {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/posts/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}
const showPosts = function() {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/posts',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

module.exports = {
    
}