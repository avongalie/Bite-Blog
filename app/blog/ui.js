//file that deals with what the user sees

const store = require('../store.js');
const blogEvents = require('./events.js');

const onCreateBlogSuccess = function(response){
    $('#create-display').text(`${response.blog.title} created`)
    $('form').trigger('reset');
    store.blog = response.blog
    
}

const onCreateBlogFailure = function(data){
    //$('.display-text').text(`Account with ${data.credentials.email} already exists`);
}

const onShowUserBlogsSuccess = function(response){
    let responseData = response.blogs
    let c =0;
    let blogHTML = '';
    responseData.forEach(blog =>{
        if(blog.owner._id === store.user._id){
            blogHTML += `
                <p><span class='show-blog-dynamic' data-id='${blog._id}'>${blog.title}</span> <button class='update-blog-dynamic' data-id='${blog._id}'>Update Blog</button><button class='delete-blog-dynamic' data-id='${blog._id}' data-title="${blog.title}">Delete Blog</button></p>
                <br> 
            `
            c++;
        }
        
    }
    )
    if(c === 0) blogHTML = "<p>No Blogs created</p>"
    

   $('#user-blogs').html(blogHTML);
    //list user blogs

}

const onShowUserBlogsFailure = function(){
    $('.display-text').text('blog fail');
}

const onShowBlogSuccess = function(response){
    let bgcolor = response.blog.backgroundColor
    if(response.blog.backgroundColor === "" || response.blog.backgroundColor == undefined) bgcolor = 'BD8C61';
    if(response.blog.aboutMe){
        // != "" || response.blog.aboutMe != undefined
        let aboutMeHTML = `
        <div class="post">  
        <p> <span class="title">ABOUT ME</span></p>
        <p>${response.blog.aboutMe}</p>
      </div>
        `;
        $('#main-content').html(aboutMeHTML);
    }else{
        $('#main-content').html("");
    }
 

    $('#showUserBlogModal').hide();
    $('.modal-backdrop').hide();
    //$('#create-post').show();
    $('#blog-title').text(response.blog.title);
    $('body').css('background-color', '#' + bgcolor)
    store.blog =response.blog;


}

const onDeleteBlogSuccess = function(title){
    $('#user-blogs').text(`"${title}" deleted`);
    if(store.blog.title === title){
        $('#blog-title').text("Bite Blog");
        $('body').css('background-color', '#BD8C61')
        $('#main-content').html("");
    }
    store.blog = '';

}

const onClickUpdateBlogSuccess = function(response){
  
    let formHTML = '';
    let bgcolor = response.blog.backgroundColor;
    let aboutMe = response.blog.aboutMe;

    if(response.blog.backgroundColor === undefined) bgcolor = "";
    if(response.blog.aboutMe === undefined) aboutMe = "";
    formHTML += `
            <p id="update-display"></p>
            <form id="update-blog-form" data-id="${response.blog._id}">
            Title: <input name="blog[title]" type="title" placeholder="title" value="${response.blog.title}">
            <br>
            Background in HEX: <input name="blog[backgroundColor]"  type="backgroundColor" placeholder="######" value="${bgcolor}">
            <br>
            About Me: <input name="blog[aboutMe]" type="aboutMe" placeholder="Tell us about you!" value="${aboutMe}">
            <br>
            <button type="submit"> UpdateBlog </button>
            </form>
            `
    
    
   $('#user-blogs').html(formHTML);

 

}

const onDynamicUpdateBlogSuccess = function(data){
  
    if(store.blog){
        if(store.blog.backgroundColor === '')$('body').css('background-color', '#BD8C61')
        if(store.blog.title === data.blog.title){
            
            $('body').css('background-color', '#' + data.blog.backgroundColor)
        if(data.blog.aboutMe){
            // != "" || response.blog.aboutMe != undefined
            let aboutMeHTML = `
            <div class="post">  
            <p> <span class="title">ABOUT ME</span></p>
            <p>${data.blog.aboutMe}</p>
          </div>
            `;
            $('#main-content').html(aboutMeHTML);
        }else{
            $('#main-content').html("");
        }
    }
    } 
    
    $('#update-display').text(`Your blog "${data.blog.title}" was updated!`);

}

const onChangePasswordSuccess = function(){

}

const onChangePasswordFailure = function(){

}

module.exports = {
    onCreateBlogSuccess,
    onCreateBlogFailure,
    onShowUserBlogsFailure,
    onShowUserBlogsSuccess,
    onShowBlogSuccess,
    onDeleteBlogSuccess,
    onClickUpdateBlogSuccess,
    onDynamicUpdateBlogSuccess
}