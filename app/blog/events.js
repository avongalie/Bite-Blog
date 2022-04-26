//file that dictates what is happening behind the scenes


const blogApi = require('./api.js')
const blogUi = require('./ui.js')
const store = require('../store.js')
const getFormFields = require('../../lib/get-form-fields.js')



const onCreateBlog = function(event){
    event.preventDefault();
    $('.display-text').text('');
    //$('#sign-up-form').show();
    console.log(event)
    let form = event.target
    let data = getFormFields(form);

    console.log(form)

    if(data.blog.title === ""){
        $('.display-text').text('Please enter blog name');
    }else{
        blogApi
            .createBlog(data)
            .then((response) => blogUi.onCreateBlogSuccess(response))
            .catch(() => blogUi.onCreateBlogFailure(data))
    }
}

const onShowUserBlogs = function(){

        blogApi
            .showBlogs()
            .then((response) => blogUi.onShowUserBlogsSuccess(response))
            .catch(() => blogUi.onShowUserBlogsFailure())
    
}

const onDynamicShowBlog = function(event){
    const blogTitle = event.target;

    const id = $(blogTitle).data('id');
    blogApi
    .showBlog(id)
    .then((response)=> blogUi.onShowBlogSuccess(response))
    // .catch(()=>console.log('fail'))
}

const onDynamicDeleteBlog =  function(event){
    const blogDelete = event.target
    const id = $(blogDelete).data('id');
    const title = $(blogDelete).data('title');
    blogApi
    .deleteBlog(id)
    .then(blogUi.onDeleteBlogSuccess(title))
    // .then(()=>console.log('how'))
}

const onClickUpdateBlog  = function(event){
    const blog = event.target;

    const id = $(blog).data('id');

    blogApi
    .showBlog(id)
    .then((response)=> blogUi.onClickUpdateBlogSuccess(response))
    // .catch(()=>console.log('fail'))
}


const onDynamicUpdateBlog =  function(event){
    event.preventDefault();

    let form = event.target
    let data = getFormFields(form);
    let id = $(form).data('id');
    let bgcolor = data.blog.backgroundColor
    
    if(bgcolor.length != 6 && bgcolor.length != 0){
        $('#update-display').text(`Please enter a 6 digit HEX number`);
    }else{
        blogApi
        .updateBlog(id, data)
        .then(blogUi.onDynamicUpdateBlogSuccess(data))
        // .catch(()=>console.log('fail'))
    }
}


const onSignOut = function(){
    authApi.signOut()
            .then(function(){
                authUi.onSignOut()
                clearBoard();
            })
}

module.exports = {
    onCreateBlog,
    onShowUserBlogs,
    onDynamicShowBlog,
    onDynamicDeleteBlog,
    onClickUpdateBlog,
    onDynamicUpdateBlog
}