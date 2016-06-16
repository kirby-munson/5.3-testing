var $ = require('jquery');
var superGreatTemplate = require('../templates/application.hbs')

function PostView(){
  $('body').append('<ul class="posts">');
  $('body').append(superGreatTemplate([{'title': 'Blog Title'}]));

  $('#post-form').on('submit', function(event){
    event.preventDefault();

    var formData = {
      'title': $('.blog-title').val(),
      'body': $('.blog-body').val()
    };

    $(document).trigger('create:post', [formData]);
  });
}
PostView.prototype.showPosts = function(posts){
  posts.forEach(function(post){
    $('.posts').append('<li><h1>' + post.title +
      '</h1><p>' + post.body + '</p></li>');

  });
}


module.exports = PostView;
