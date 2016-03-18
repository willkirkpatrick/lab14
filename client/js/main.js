//Use to instantiate app, connect factory & controllers and configure app.

var app = angular.module('myBlogApp', ["ngRoute","ngResource"]);

app.config(["$routeProvider", function($routeProvider) {
   
    $routeProvider
    .when("/", {
        templateUrl: "views/blogposts.html",
        controller: "blogPostsController"
    })
    .when("/newpost", {
        templateUrl: "views/newpost.html",
        controller: "newPostController"
    })
    .otherwise({
        redirectTo: "/"
    });
}]);