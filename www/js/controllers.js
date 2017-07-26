angular.module('starter.controllers', [])

.controller('LoadingCtrl', function($scope, $state) {
  $scope.goToList = function() {
    $state.go('list');
  }
})

.controller('ListCtrl', function($scope, $state, Restaurants) {
  $scope.restaurants = [];
  Restaurants.all().then(function(response) {
    $scope.restaurants = response.data;
  })
  $scope.getStars = function(rating) {
    // Get the value
    var val = parseFloat(rating);
    // Turn value into number/100
    var size = val/5*100;
    return size + '%';
  }
  $scope.goToChatBot = function() {
    $state.go('chats');
  }
  $scope.goToDetails = function(restaurant) {
    $state.go('details', { id: restaurant.id });
  }
})

.controller('ChatsCtrl', function($scope, ChatBot) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.messages = [{ text:"Welcome to the ChatBot, please kill me now", sender:"bot"}];
  $scope.newMessage = "";

  $scope.sendMessage = function() {
    if ($scope.newMessage == '') return;
    $scope.messages.push({ text: $scope.newMessage, sender:"user" });

    var results = ChatBot.get($scope.newMessage);

    if (results != null) {
      $scope.messages.push({text: "Here's what I found: ", sender:"bot", restaurants: results});
    } else {
      $scope.messages.push({text: "No results found/I could not understand you", sender:"bot"});
    }

    $scope.newMessage = "";
  }

  $scope.getStars = function(rating) {
    // Get the value
    var val = parseFloat(rating);
    // Turn value into number/100
    var size = val/5*100;
    return size + '%';
  }
  
})

.controller('DetailsCtrl', function($scope, $stateParams, Restaurants) {
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  var date = new Date();
  $scope.year = date.getFullYear();
  $scope.month = months[date.getMonth()];
  $scope.date = date.getDate();
  $scope.day = days[date.getDay()];
  
  $scope.restaurant;
  $scope.restaurant = Restaurants.get($stateParams.id).then(function(response) {
    $scope.restaurant = response.data;
    $scope.restaurant.menus.forEach(function(menu) {
      if ($scope.day.toLowerCase() === menu.day.toLowerCase()) {
        $scope.todayMenu = menu;
      }
    })
  })  
});
