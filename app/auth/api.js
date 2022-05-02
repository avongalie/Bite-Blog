
   
//file that grabs from the API
const store = require('../store.js');
const config = require('../config.js');


const signUp = function(data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-up',
        data
    })
}

const signIn = function(data) {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/sign-in',
        data
    })
}

const signOut = function() {
    return $.ajax({
        method: 'DELETE',
        url: config.apiUrl + '/sign-out',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        }
    })
}

const changePassword = function(data) {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/change-password',
        headers: {
            Authorization: 'Bearer ' + store.user.token
        },
        data
    })
}

module.exports = {
    signUp,
    signIn,
    signOut,
    changePassword
}