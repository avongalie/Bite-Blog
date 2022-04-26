//file that deals with what the user sees

const store = require('../store.js');
const authEvents = require('./events.js');

const onSignUpSuccess = function(){
    //$('#sign-up').hide();
    //$('#sign-in').show();
    $('form').trigger('reset');
    $('#sign-up-form').hide();
    $('.display-text').text('Return to page and log-in');
    // $('#signUpModal').hide();
    // $('.modal-backdrop').hide();
}

const onSignUpFailure = function(data){
    $('.display-text').text(`Account with ${data.credentials.email} already exists`);
}

const onSignInSuccess = function(response){
    $('.display-text').text('');
    $('form').trigger('reset');
    $('#sign-in').hide();
    $('#logged-in').show();
    //$('#begin-game').show();
    //$('#welcome').text(`Welcome ${response.user.email}`);
    $('#logInModal').hide();
    $('.modal-backdrop').hide();
     $('#sign-out').show();
    store.user = response.user;

}

const onSignInFailure = function(){
    $('.display-text').text('Email or Password is incorrect');
}

const onSignOut = function(){
    //return to main page
    $('#sign-in').show();
    $('#logged-in').hide();
     $('#sign-out').hide();
     //$('.modal-backdrop').show();

     $('#main-content').html("");
     $('#blog-title').text("Bite Blog");
     $('body').css('background-color', '#BD8C61')
    
     $('#user-blogs').text("")
}

const onChangePasswordSuccess = function(){

}

const onChangePasswordFailure = function(){

}

module.exports = {
    onSignUpFailure,
    onSignUpSuccess,
    onSignInFailure,
    onSignInSuccess,
    onSignOut,
}