/**
 * sampleController.
 * @param $scope
 * @param sampleService
 */

app.controller('sampleController', [ '$scope','sampleService',
    function($scope, sampleService) {
      sampleService.get({}).$promise.then(function(response) {
        $scope.posts = response;
    });

    }
]);
