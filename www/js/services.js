angular.module('starter.services', [])

.factory('Restaurants', function($http) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var restaurants = [{
    id: 0,
    name: 'Best lunch place',
    location: 'Building 83',
    rating: 2.4,
    pictureUri: "asdf"
  }, 
  {
    id: 1,
    name: 'kyubereats #5',
    location: 'Building 911',
    rating: 4.6,
    pictureUri: "asdf"
  }, 
  {
    id: 1,
    name: 'kyubereats #5',
    location: 'Building 911',
    rating: 4.6,
    pictureUri: "asdf"
  }, 
  {
    id: 1,
    name: 'kyubereats #5',
    location: 'Building 911',
    rating: 4.6,
    pictureUri: "asdf"
  }, 
  {
    id: 1,
    name: 'kyubereats #5',
    location: 'Building 911',
    rating: 4.6,
    pictureUri: "asdf"
  }, 
  {
    id: 1,
    name: 'kyubereats #5',
    location: 'Building 911',
    rating: 4.6,
    pictureUri: "asdf"
  }];

  return {
    all: function() {
      return $http.get('http://onecafeteria.azurewebsites.net/api/restaurant/getallrestaurants');
    },
    get: function(id) {
      // for (var i = 0; i < restaurants.length; i++) {
      //   if (restaurants[i].id == id) {
      //     return restaurants[i];
      //   }
      // }
      // return null;

      return $http.get('http://onecafeteria.azurewebsites.net/api/restaurant/getrestaurantdetail/' + id);    
    }
  };

})
.factory('ChatBot', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var results = [{
    id: 0,
    name: 'Best lunch place',
    location: 'Building 83',
    rating: 2.4,
    pictureUri: "asdf"
  }, 
  {
    id: 1,
    name: 'kyubereats #5',
    location: 'Building 911',
    rating: 4.6,
    pictureUri: "asdf"
  }];

  return {
    get: function(message) {
      return results;
    }
  };
});
