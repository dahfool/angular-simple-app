/**
 * a sample service
 * @param messages
 */
app.factory('sampleService', ['$resource', function($resource) {
  return $resource('http://jsonplaceholder.typicode.com/posts', {}, {
    get: {
      method:'GET',
      isArray:true
    }
  });
}]);
