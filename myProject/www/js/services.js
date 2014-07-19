angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array
  //var genChat = new GenesysChat('http://127.0.0.1:8888', 'api', 'N18TFGbKpn0zaGLXDFZhPWpTcB2eyx44', 'JohnDoe', 'HelloWorld!');
  
 

  // $http.get('/someUrl').success(successCallback);
  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
