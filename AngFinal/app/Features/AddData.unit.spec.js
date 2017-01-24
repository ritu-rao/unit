describe('Add Controller', function()
{ 
var message;
var scope;
var ctrl;
var books;
//scope=$rootScope.$new();
var mockservice=[
      {
            id: 1,
            title: "Harry Potter",
            year: 2011,
            favorite: true
        }
];
beforeEach(module("myApp"));
beforeEach(angular.mock.module(function ($provide) {
$provide.service('dataService', function dataService($q, $timeout) {
return {
    Post:function(mockservice) {
       var deferral = $q.defer();
       deferral.resolve(200);
      return deferral.promise;
        },    
              };
        });
    }));

 beforeEach(inject(function($rootScope,$controller,$routeParams)
{
 scope=$rootScope.$new();
 ctrl=$controller("AddController",{$scope:scope});  
}));
 it("Add Controller is defined", function() {
    expect(ctrl).toBeDefined();  
  });
  
 it("Add function validation", function() {
     expect(scope.books.favorite).toEqual(false);
 });
   it("Add function is defined",function(){
    scope.addDetails();
    scope.$digest();
    expect(scope.message).toBe("success");
    
});
 
 });