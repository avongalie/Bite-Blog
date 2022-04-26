// use require with a reference to bundle the file and use it in this file
// const example = require('./example')


const authEvents = require('./auth/events.js')
const blogEvents = require('./blog/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#logged-in').hide();

  // $('#my-modal').hide();
  // $('#overlay').hide();
  
  $('#sign-up-form').on("submit", authEvents.onSignUp);
  $("#log-in-form").on("submit", authEvents.onSignIn);
  $("#create-blog-form").on("submit", blogEvents.onCreateBlog);
  $('#sign-out').hide();
 $('#log-in-button').on('click', function(){
   $('.display-text').text('')
 // $('.modal-backdrop').show();
 })
 $('#sign-up-button').on('click',function() {
  $('#sign-up-form').show();
   $('.display-text').text('')
  })


  $('#show-user-blogs').on('click', blogEvents.onShowUserBlogs)

  $('#user-blogs').on('click', '.show-blog-dynamic', blogEvents.onDynamicShowBlog)
  $('#user-blogs').on('click', '.delete-blog-dynamic', blogEvents.onDynamicDeleteBlog)
 
  $('#user-blogs').on('click', '.update-blog-dynamic', blogEvents.onClickUpdateBlog)
  $('#user-blogs').on('click', '#update-blog-form', function(){
    $('#update-blog-form').on('submit', blogEvents.onDynamicUpdateBlog)
  })
  //$('#update-blog-form').on('submit', blogEvents.onDynamicUpdateBlog)
 //$('#create-post').hide();
  $('#sign-out').on('click', authEvents.onSignOut);

  $('#close-update-users').on('click', function(){
    
    $('#user-blogs').text("")
  })

  $('#home-button').on('click', function(){

    $('#blog-title').text("Bite Blog");
    $('body').css('background-color', '#BD8C61')
    $('#main-content').html("");
  })
})
