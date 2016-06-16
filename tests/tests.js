var expect = chai.expect;
var $ = require('jquery');
var Post = require('../app/scripts/models');
var Index = require('../app/scripts/index')


/**
 * Write some tests to test the Post Model
 */
describe('Post', function(){
  describe("fetch", function(){

    it("should return a promise", function(){
      var promise = Post.fetch();
      expect(promise).to.respondTo('then');
    });

    it("should resolve with an array of posts", function(done){
      Post.fetch().then(function(posts){
        var firstPost = posts[0];
        expect(firstPost).to.have.property('title');
        expect(firstPost).to.have.property('body');
        expect(firstPost).to.have.property('_id');
        // expect(firstPost).to.have.property('created_at');
        done();
      });
    });

    it("should trigger a posts:fetched event", function(done){

      $(document).on('posts:fetched', function(event, posts){
        expect(posts).to.be.an.instanceof(Array);
        done();
      });

      Post.fetch();
    });
  });
});

// PUT YOUR TESTS HERE!!!

describe('create post form', function(){
  it('should trigger a create:post event on the document with the title and body', function (done) {
      $(document).on('create:post', function(event, data){
      expect(data).to.have.property('title');
      expect(data).to.have.property('body');
      expect(data.title).to.equal('Cool dude');
      expect(data.body).to.equal('Cooler than you');
      done();
        });
        $('.blog-title').val('Cool dude');
        $('.blog-body').val('Cooler than you');
        $('#post-form').submit();

        $(document).trigger('create:post', [{'title': 'Cool', 'body': 'Cooler'}]);

      });
    });
