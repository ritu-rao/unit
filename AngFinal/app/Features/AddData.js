angular.module("myApp").controller('AddController',function($scope,dataService,$location){
var data;
$scope.books={};  
$scope.books.favorite=false;
$scope.addDetails=function()
    {       
        dataService.Post($scope.books).then(function(data){ 
            $scope.message="success"; 
        $location.path('/GetData');
        });
    };
});