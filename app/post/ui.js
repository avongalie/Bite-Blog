//file that deals with what the user sees

const store = require('../store.js');
const authEvents = require('./events.js');

const onSignUpSuccess = function(){
    $('#sign-up').hide();
    $('#sign-in').show();
    $('form').trigger('reset');
    $('#sign-up-form').hide();
    $('.display-text').text('Return to page and log-in');
    
}

const onSignUpFailure = function(data){
    $('.display-text').text(`Account with ${data.credentials.email} already exists`);
}

const onSignInSuccess = function(response){
    $('.display-text').text('');
    $('form').trigger('reset');
    $('#sign-in').hide();
    $('#begin-game').show();
    $('#welcome').text(`Welcome ${response.user.email}`);
    store.user = response.user;

}

const onSignInFailure = function(){
    $('.display-text').text('Email or Password is incorrect');
}

const onChangePasswordSuccess = function(){

}

const onChangePasswordFailure = function(){

}

module.exports = {
    onSignUpFailure,
    onSignUpSuccess,
    onSignInFailure,
    onSignInSuccess
}