//file that dictates what is happening behind the scenes


const authApi = require('./api.js')
const authUi = require('./ui.js')
const store = require('../store.js')
const getFormFields = require('../../lib/get-form-fields.js')



const onSignUp = function(event){
    event.preventDefault();
    $('.display-text').text('');

    let form = event.target
    let data = getFormFields(form);

    if(data.credentials.email === ""){
        $('.display-text').text('Please enter email');
    }else if((data.credentials.password === "") || (data.credentials.password_confirmation === "")){
        $('.display-text').text('Please enter password');
    }else if(data.credentials.password !== data.credentials.password_confirmation){
        $('.display-text').text('Passwords do not match');
    }else{
        authApi
            .signUp(data)
            .then(() => authUi.onSignUpSuccess())
            .catch(() => authUi.onSignUpFailure(data))
    }
}

const onSignIn = function(event){
    event.preventDefault();
    $('.display-text').text('');

    let form = event.target
    let data = getFormFields(form);

        authApi
            .signIn(data)
            .then((response) => authUi.onSignInSuccess(response))
            .catch(() => authUi.onSignInFailure())
    
}

const onSignOut = function(){
    authApi.signOut()
            .then(function(){
                authUi.onSignOut()
            })
}

const onChangePassword = function(event){
    event.preventDefault();
    $('.display-text').text('');
    
    let form = event.target
    let data = getFormFields(form);

    if(data.passwords.old === data.passwords.new){
        $('.display-text').text("Password's can not match");
    }else{
        authApi
            .changePassword(data)
            .then(() => authUi.onChangePasswordSuccess())
            .catch(() => authUi.onChangePasswordFailure())
    }

}

module.exports = {
    onSignUp,
    onSignIn,
    onSignOut,
    onChangePassword
}