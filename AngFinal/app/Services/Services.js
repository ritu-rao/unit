angular.module("myApp").service("Services",function($http,$q,$routeParams){

this.Get=function()
{
return $http.get('http://localhost:4000/api/books').then(function(data){
     if(data.status==200)
     {
return data;
console.log(data);
     }else
     {
         $q.error();
     }
});   
}


this.Post=function(books)
{
return $http.post('http://localhost:4000/api/books',books).then(function(data){
     if(data.status==200)
     {
return data;
console.log(data);
     }else
     {
         $q.error();
     }
});   
}
this.Getbyid=function(id)
{
return $http.get('http://localhost:4000/api/book/'+id).then(function(data){
     if(data.status==200)
     {
return data;
console.log(data);
     }else
     {
         $q.error();
     }
});   
}
this.Delete=function(id)
{
     $http.delete('http://localhost:4000/api/book/'+id).then(function(data){
     if(data.status==200)
     {
        return data;
        console.log(data);
     }else
     {
         $q.error();
     }
});   
}

this.updatebook = function (bok) {
 return $http.put('http://localhost:4000/api/books',bok ).then(function(data){
     if(data.status==200)
     {
return data;
console.log(data);
     }else
     {
         $q.error();
     }
});   
}
});