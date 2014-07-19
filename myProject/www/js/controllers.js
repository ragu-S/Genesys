angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends, $http) {
  $scope.friends = Friends.all();
  var request = $http({method: 'GET', url: 'http://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'}).
    success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    console.log(data);
    console.log(status);
    console.log(config);
    }).
    error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log("error ", data);
    });
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
