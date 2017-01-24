describe('GET Controller', function() {
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
    Get:function() {
         response.status=200;
        response.data=mockservice[id];
       var deferral = $q.defer();
       deferral.resolve(200);
      return deferral.promise;
        },
         Delete:function() {
           response.status=200;
          response.data=mockservice[id-1];
       var deferral = $q.defer();
       deferral.resolve(200);
      return deferral.promise;
        }    
              };
        });
    }));

 beforeEach(inject(function($rootScope,$controller){
     scope=$rootScope.$new();
     ctrl=$controller('dataController',{$scope:scope});
     scope.$digest();
 }));

 it("Get controller is defined",function(){
      expect(ctrl).toBeDefined();
 });
 

  it("Getdata function is defined",function(){
    scope.GetData();
    scope.$digest();
    expect(scope.message).toBe("success");
       scope.$digest();
});
 it("Getdata function is defined",function(){
    scope.DelData(id);
    scope.$digest();
    expect(scope.message).toBe("success");
});
 it("Getdata function is defined",function(){
    scope.DelData(2);
    scope.$digest();
     scope.data={};
       scope.$digest();
        expect(scope.messa).toBe("success");
     scope.GetData();
    scope.$digest();

 });
 })