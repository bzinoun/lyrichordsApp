angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
            $http.get("https://www.googleapis.com/blogger/v3/blogs/7532267441640506145/posts?endDate=2016-08-27T10%3A00%3A00-05%3A00&fetchBodies=true&fetchImages=true&maxResults=400&orderBy=published&status=live&key=AIzaSyAX99BkwMKwZW9k7b78ChgbRrlkaLcJmr8").then(function(response){
                $scope.datas = response.data.items; 
                
            
            });
            });
    
/*    
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
    };
  */
    
    
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
