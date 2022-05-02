
   
//file that grabs from the API
const store = require('../store.js');
const config = require('../config.js');


const createBlog = function(data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/blogs',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

const showBlog = function(id) {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/blogs/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}
const showBlogs = function() {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/blogs',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const deleteBlog = function(id) {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/blogs/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const updateBlog = function(id, data) {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/blogs/' + id,
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

module.exports = {
    createBlog,
    showBlog,
    showBlogs,
    updateBlog,
    deleteBlog
}