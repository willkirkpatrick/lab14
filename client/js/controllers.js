//Logic for page actions here. 

var controllers = angular.module('myBlogApp');

controllers.controller('blogPostsController', ['$scope', '$location', 'PostFactory', function($scope, $location, PostFactory) {
    console.log('loading controller');
    $scope.loaded = function() {
        $scope.oldMessages = PostFactory.query().$promise.then(function(data) {
            $scope.oldMessages = data;
        });    
        console.log('loaded controller');    
    }
    console.log('midway through loading');
    $scope.newPost = function() {
        // $scope.oldMessages = PostFactory.query().$promise.then(function(data) {
        //     $scope.oldMessages = data;
        // });
        console.log($scope.oldMessages);
        console.log("inside newPost function");
        $location.path("/newpost");
    }
    $scope.loaded();
}]);

controllers.controller("newPostController", ["$scope", "$location", 'PostFactory', function($scope, $location, PostFactory) {
    $scope.post = function() {
        console.log("inside post function");
        $scope.newEntry = {title: $scope.titleLine, author: $scope.writer, blog: $scope.weblog};
        console.log($scope.newEntry);
        PostFactory.save($scope.newEntry);
        $location.path("/archive");
    }
}]);