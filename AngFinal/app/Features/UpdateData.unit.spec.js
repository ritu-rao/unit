 describe('update Controller', function() {
var scope;
var response={};
var ctrl;
var id;
var mockservice=[
      {
            id: 1,
            title: "Harry Potter",
            year: 2011,
            favorite: true
        },
              {
            id: 2,
            title: "Potter",
            year: 2011,
            favorite: true
        }
];
  beforeEach(module('myApp'));
   beforeEach(angular.mock.module(function ($provide) {
 $provide.service('dataService', function dataService($q, $timeout) {
 return {
    Getbyid:function(id) {
        response.status=200;
        response.data=mockservice[id-1];
        var deferral = $q.defer();
        deferral.resolve(response);
       return deferral.promise;
         },
          Get:function() {
        var deferral = $q.defer();

        deferral.resolve(mockservice);
       return deferral.promise;
         },  
          updatebook:function(up) {
        mockservice[up.id-1]=up;
           response.status=200;
        var deferral = $q.defer();
        deferral.resolve(response);
       return deferral.promise;
         } 
              };
         });
     }));

 beforeEach(inject(function($rootScope,$controller){
     scope=$rootScope.$new();
     ctrl=$controller('updateController',{$scope:scope});
     scope.id=2;
 }));

 it("Get controller is defined",function(){
      expect(ctrl).toBeDefined();
 });
 it("book controller is defined",function(){
      expect(scope.book).toBeDefined();
 });
   it("Getdata function is defined",function(){
   scope.Getdata();
   scope.$digest();
     expect(scope.book.title).toBe("Potter");
 });
 it("Getdata function is defined",function(){
  scope.GetDataindisplay();
  scope.$digest();
    expect(scope.message).toBe("success");
});
it("Getdata function is defined",function(){
  scope.update();
  scope.$digest();
    expect(scope.message).toBe("success");
});
it("update check",function(){
     scope.$digest();
     scope.book={
        id: 2,
            title: "Harry",
            year: 2011,
            favorite: true
     };
     scope.$digest();
       expect(scope.book.id).toEqual(2);
       scope.update();
       scope.$digest();
       scope.book={};
       scope.$digest();
     expect(scope.message).toBe("success");
      scope.$digest();
   expect(scope.messa).toBe("success");
   scope.$digest();
      scope.Getdata();
       scope.$digest();
   expect(scope.book.title).toBe("Harry");
 });
 
});