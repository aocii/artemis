angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout,$ionicPopup,$rootScope) {

  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

$scope.showAlertcod = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Tank tipi ve bekletme süreleri:' ,
     template: 'Dengeleme Havuzu:<br> 24 Saat<br><hr>Siyanürlü Atıksu Dengeleme Havuzu:<br> 3 Saat<br><hr>Siyanür Oksidasyon Tankı:<br> 15 Dakika<br><hr>Kromlu Atıksu Dengeleme Havuzu:<br> 3 Saat<br><hr>Krom İndirgeme Tankı:<br> 20 - 30 Dakika<br><hr>Hızlı Karıştırma Tankı:<br> 20 - 30 Dakika<br><hr>Yavaş Karıştırma Tankı:<br> 30 - 40 Dakika<br><hr>Çöktürme Tankı:<br> 3 Saat<br><hr>Son Nötralizasyon Tankı:<br> 20 - 30 Dakika<br><hr>Süzüntü Suyu Tankı:<br> 40 Dakika<br><hr>Deşarj Tankı:<br> 20 - 30 dakika<br>'
   })
 }

$scope.x = function (a,b){
  xi = Number(((a-b)/a)*100).toFixed(2)

  if(xi >100 || xi < 0 ) {
      $scope.error0 = "lütfen değerlerinizi kontrol ediniz." 
      $scope.x1 = "-"
  } else {
      $scope.x1 = xi
      $scope.error0 = ""
  }

}

$scope.y = function (c,d) {
  xii = Number(((c-d)/c)*100).toFixed(2)

  if(xii >100 || xii < 0 ) {
      $scope.error1 = "lütfen değerlerinizi kontrol ediniz."
      $scope.x2 = "-" 
  } else {
      $scope.x2 = xii
      $scope.error1 = ""
  } 

}

$scope.z = function (e,f) {
  xiii = Number(((e-f)/e)*100).toFixed(2)

if(xiii >100 || xiii < 0 ) {
      $scope.error2 = "lütfen değerlerinizi kontrol ediniz."
      $scope.x3 = "-" 
  } else {
    $scope.x3 = xiii 
    $scope.error2 = ""
}









}
})
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Tesis Verim', adres: 'verim', id: 0 },
    { title: 'Standart Tank Hacim Hesabı ', adres: 'tank', id: 1 },
    { title: 'Konik Tabanlı Tank Hacim Hesabı',  id: 2 },
    { title: 'Boru Delik Çap&Hız Hesabı', id: 3 },
   { title: 'Biz Kimiz?',adres: 'tanitim', id: 4 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
