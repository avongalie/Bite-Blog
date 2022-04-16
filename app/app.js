// use require with a reference to bundle the file and use it in this file
// const example = require('./example')


const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#logged-in').hide();
  
  $('#sign-up-form').on("submit", authEvents.onSignUp);
  $("#log-in-form").on("submit", authEvents.onSignIn);
  $('#sign-out').hide();
 $('#log-in-button').on('click', function(){
   $('.display-text').text('')
  $('.modal-backdrop').show();
 })
 $('#sign-up-button').on('click',function() {
  $('#sign-up-form').show();
   $('.display-text').text('')
  })

  $('#sign-out').on('click', authEvents.onSignOut);
})
