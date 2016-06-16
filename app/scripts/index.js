var $ = require('jquery');
var PostView = require('./views.js');
var Post = require('./models.js');


$(function(){
  var view = new PostView();
  var create = new CreatePost();

  $(document).on('posts:fetched', function(event, posts){
    view.showPosts(posts);
  });
$(document).trigger('create:post');
  Post.fetch();
});
