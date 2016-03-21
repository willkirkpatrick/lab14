//Logic for page actions here. 

var controllers = angular.module('myBlogApp');

controllers.controller('blogPostsController', ['$scope', '$location', 'PostFactory', "$rootScope", function($scope, $location, PostFactory, $rootScope) {
    $scope.loaded = function() {
        $scope.oldMessages = PostFactory.query().$promise.then(function(data) {
            $scope.oldMessages = data;
        });      
    }
    $scope.newPost = function() {
        $location.path("/newpost");
    }
    
    $scope.readIt = function(id) {
        console.log("inside read function");
        console.log(id);
        $location.path("/readIt");
        $scope.singlePost = PostFactory.get({id}).$promise.then(function(data) {
            $rootScope.singleBlog = data;
            console.log($rootScope.singleBlog);
           
        });
    }
     $scope.return = function() {
        $location.path("/");
     }
      
    $scope.loaded();
}]);

controllers.controller("newPostController", ["$scope", "$location", 'PostFactory', function($scope, $location, PostFactory) {
    $scope.post = function() {
        console.log("inside post function");
        $scope.newEntry = {title: $scope.titleLine, author: $scope.writer, blog: $scope.weblog};
        console.log($scope.newEntry);
        PostFactory.save($scope.newEntry);
        $location.path("/");
    }
}]);

// controllers.controller("singleViewController", ["$scope", "$location", "PostFactory", function($scope, $location, PostFactory) {
    
//     }
// }]);