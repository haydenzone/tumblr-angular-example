console.log(tumblr_api_read);

var app = angular.module('TumblrApp', []);
app.controller('PostsController', function() {
    this.posts = tumblr_api_read.posts;
});
