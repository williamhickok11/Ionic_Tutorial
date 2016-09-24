angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, $http) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };


  // HERE IS WHERE MY CODE BEGINS
  playerList = {};
  $http({
    url: "https://phonx-rave.firebaseio.com/Players/.json",
    method: "GET"
  }).then(function(data) {
    playerList = data.data;
    console.log("playerList", playerList);
    // Get access to current player highScore
    // console.log("currentPlayerUID", currentPlayerUID);
    // Loop through all players
    var Fade_highScoreId = "lvl3_highScore"
    var Fade_highStreakId = "lvl3_longestStreak"
    var Slime_highScoreId = "slime_highScore"
    var Slime_highStreakId = "slime_longestStreak"
    var Pioneer66_highScoreId = "pioneer66_highScore"
    var Pioneer66_highStreakId = "pioneer66_longestStreak"

    var Fade_playerScoreArray = [];
    var Fade_playerNameArray = [];
    var Fade_playerStreakArray = [];
    var Fade_playerLeaderBoard = [];

    var Slime_playerScoreArray = [];
    var Slime_playerNameArray = [];
    var Slime_playerStreakArray = [];
    var Slime_playerLeaderBoard = [];

    var Pioneer66_playerScoreArray = [];
    var Pioneer66_playerNameArray = [];
    var Pioneer66_playerStreakArray = [];
    var Pioneer66_playerLeaderBoard = [];
    var contentString = "<h4>Leader Board</h4><div class='row'>";
    // Loop through, find the highest score, create a new array for Fade
    for (let player in playerList) {
      if (playerList[player].pioneer66_highScore !== 0) {
        // .push(playerList[player].pioneer66_highScore);
        Pioneer66_playerLeaderBoard.push(
          {
            playerName : playerList[player].userName,
            playerHighScore : playerList[player].pioneer66_highScore,
            playerHighStreak : playerList[player].pioneer66_longestStreak
          }
        );
      };
    }

    Array.prototype.sortOn = function(key){
      this.sort(function(a, b){
        if(a[key] < b[key]){
          return -1;
        }else if(a[key] > b[key]){
          return 1;
        }
        return 0;
      });
    }

    console.log("Pioneer66_playerLeaderBoard", Pioneer66_playerLeaderBoard);
      // console.log("playerLeaderBoard", playerLeaderBoard);
      Array.prototype.sortOn = function(key){
          this.sort(function(a, b){
              if(a[key] < b[key]){
                  return -1;
              }else if(a[key] > b[key]){
                  return 1;
              }
              return 0;
          });
      }
      Pioneer66_playerLeaderBoard.sortOn("playerHighScore");
      Pioneer66_playerLeaderBoard.reverse();
      console.log("Pioneer66_playerLeaderBoard sorted", Pioneer66_playerLeaderBoard);
      $scope.Pioneer66_playerLeaderBoard = Pioneer66_playerLeaderBoard;
      contentString += '<div class="col m4 leader_board_3divs"><h4>I Want You</h4>'
      for (var i = 0; i < Pioneer66_playerLeaderBoard.length; i++) {
        contentString += `<h5>${i+1}. ${Pioneer66_playerLeaderBoard[i].playerName}: ${Pioneer66_playerLeaderBoard[i].playerHighScore}</h5><p>Longest Streak: ${Pioneer66_playerLeaderBoard[i].playerHighStreak}</p>`
      };
      contentString += '</div>';
      // Loop through, find the highest score, create a new array for Fade
      for (let player in playerList) {
        // console.log("playerList", playerList);
        if (playerList[player].lvl3_highScore !== 0) {
          Fade_playerScoreArray.push(playerList[player].lvl3_highScore);
          Fade_playerLeaderBoard.push(
            {
              playerName : playerList[player].userName,
              playerHighScore : playerList[player].lvl3_highScore,
              playerHighStreak : playerList[player].lvl3_longestStreak
            }
          );
        };
      }
      console.log("Fade_playerLeaderBoard", Fade_playerLeaderBoard);
      // console.log("playerLeaderBoard", playerLeaderBoard);
      Array.prototype.sortOn = function(key){
          this.sort(function(a, b){
              if(a[key] < b[key]){
                  return -1;
              }else if(a[key] > b[key]){
                  return 1;
              }
              return 0;
          });
      }
      Fade_playerLeaderBoard.sortOn("playerHighScore");
      Fade_playerLeaderBoard.reverse();
      console.log("Fade", Fade_playerLeaderBoard);
      console.log("Fade_playerLeaderBoard sorted", Fade_playerLeaderBoard);
      contentString += '<div class="col m4 leader_board_3divs"><h4>Fade</h4>'
      for (var i = 0; i < Fade_playerLeaderBoard.length; i++) {
        contentString += `<h5>${i+1}. ${Fade_playerLeaderBoard[i].playerName}: ${Fade_playerLeaderBoard[i].playerHighScore}</h5><p>Longest Streak: ${Fade_playerLeaderBoard[i].playerHighStreak}</p>`
      };
      contentString += '</div>';


      // Loop through, find the highest score, create a new array for Fade
      for (let player in playerList) {
        // console.log("playerList", playerList);
        if (playerList[player].slime_highScore !== 0) {
          Slime_playerScoreArray.push(playerList[player].slime_highScore);
          Slime_playerLeaderBoard.push(
            {
              playerName : playerList[player].userName,
              playerHighScore : playerList[player].slime_highScore,
              playerHighStreak : playerList[player].slime_longestStreak
            }
          );
        };
      }
      console.log("Slime_playerLeaderBoard", Slime_playerLeaderBoard);
      // console.log("playerLeaderBoard", playerLeaderBoard);
      Array.prototype.sortOn = function(key){
          this.sort(function(a, b){
              if(a[key] < b[key]){
                  return -1;
              }else if(a[key] > b[key]){
                  return 1;
              }
              return 0;
          });
      }
      Slime_playerLeaderBoard.sortOn("playerHighScore");
      Slime_playerLeaderBoard.reverse();
      console.log("Fade", Slime_playerLeaderBoard);
      console.log("Slime_playerLeaderBoard sorted", Slime_playerLeaderBoard);
      contentString += '<div class="col m4 leader_board_3divs"><h4>Slime</h4>'
      for (var i = 0; i < Slime_playerLeaderBoard.length; i++) {
        contentString += `<h5>${i+1}. ${Slime_playerLeaderBoard[i].playerName}: ${Slime_playerLeaderBoard[i].playerHighScore}</h5><p>Longest Streak: ${Slime_playerLeaderBoard[i].playerHighStreak}</p>`
      };
      contentString += '</div>';











      contentString += '</div>';
      // Post the leader_board
      console.log("contentString", contentString);























  })

})








.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
