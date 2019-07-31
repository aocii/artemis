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

$scope.sil = function (h1,v1){
  $scope.r_m = Number((Math.pow((v1/3.1416)*(h1/100),0.5))*10).toFixed(2)
  $scope.r_cm = Number($scope.r_m*100 ).toFixed(2)
}
$scope.sil1 = function(v2,rm){
  $scope.h6 = v2/(rm*rm*3.1416)
  $scope.h_m = Number($scope.h6).toFixed(2)
  $scope.h_cm = Number($scope.h6*100).toFixed(2)
}
$scope.sil2 = function(r1,h2){
  $scope.v_m3 = Number(3.1416*r1*r1*h2).toFixed(2)
}
$scope.drtg = function(v,en,boy){
  $scope.drtgn_h = Number(v/(en*boy)).toFixed(2) 
}
$scope.dortgen1 = function(en,boy,d_h){
  $scope.drtgn_v = Number(d_h*en*boy).toFixed(2) 
} 

$scope.hvz = function(q,e,s,d){
  if(d != null){
    $scope.v_hvz = Number(q*s+(q*(d/60))).toFixed(2)  
    $scope.e_v_hvz = Number($scope.v_hvz*((e/100)+1)).toFixed(2)
  }else{ 
    $scope.v_hvz = Number(q*s).toFixed(2)  
    $scope.e_v_hvz = Number($scope.v_hvz*((e/100)+1)).toFixed(2) }


}
$scope.konikhacim = function(debi_k,t_sa,t_dk,k_oran,emniyet_k){
  if(k_oran>100 || k_oran<0 ||emniyet_k>100 || emniyet_k< 0)
  {$scope.error5 = "Oran 100'den büyük, 0'dan küçük olamaz"
   $scope.c_v = "*"
   $scope.c_e_v= "*"
   $scope.c_s_v= "*"
   $scope.c_k_v = "*"
}
  
  else{
    if(t_dk == null ){t_dk = 0}
    $scope.c_v1= debi_k*t_sa+debi_k*(t_dk/60)
    $scope.c_v = Number($scope.c_v1).toFixed(2) 
    $scope.c_e_v1 = $scope.c_v*(1+emniyet_k/100)
    $scope.c_e_v = Number($scope.c_e_v1).toFixed(2)
    $scope.c_s_v1 = $scope.c_e_v * ((100-k_oran)/100)
    $scope.c_s_v = Number($scope.c_s_v1).toFixed(2)
    $scope.c_k_v1= $scope.c_e_v *(k_oran/100)
    $scope.c_k_v = Number($scope.c_k_v1).toFixed(2) }
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

$scope.konik_sil_hacim = function(s_h) {
  $scope.r_m1 = Math.pow(($scope.c_s_v1/(Math.PI*s_h)),0.5)
  $scope.r_m = Number($scope.r_m1).toFixed(2)
  $scope.r_cm = Number($scope.r_m1*100).toFixed(2)
  $scope.konik_h =Number(($scope.c_k_v1*3)/(3.1416*$scope.r_m1*$scope.r_m1)).toFixed(2)
  $scope.konik_d = Number(Math.atan($scope.konik_h/$scope.r_m1)*57.3).toFixed(2)
}

$scope.swp= function(swipe,sil_yuk) {
 $scope.ust = ((sil_yuk*3)*(swipe/100)).toFixed(2)
 $scope.r_m1 = Math.pow(($scope.c_s_v1/(Math.PI*$scope.ust)),0.5)
 $scope.r_m = Number($scope.r_m1).toFixed(2)
 $scope.r_cm = Number($scope.r_m1*100).toFixed(2)
 $scope.konik_h =Number(($scope.c_k_v1*3)/(3.1416*$scope.r_m1*$scope.r_m1)).toFixed(2)
 $scope.konik_d = Number(Math.atan($scope.konik_h/$scope.r_m1)*57.3).toFixed(2)
 if($scope.konik_d < 55){
   $scope.renk = "red" 
 }else{$scope.renk="black"}
}

$scope.swp1 = function (swipe1,cap1) {
  $scope.ust1 = ((cap1/3)*(swipe1/100)).toFixed(2) 
  $scope.k_s_h_m1 = $scope.c_s_v1/(Math.PI*$scope.ust1*$scope.ust1)
  $scope.k_s_h_m = Number($scope.k_s_h_m1).toFixed(2)
  $scope.k_s_h_cm = Number($scope.k_s_h_m1*100).toFixed(2)
  $scope.konik_h_s1 = ($scope.c_k_v1*3)/(3.1416*$scope.ust1*$scope.ust1)
  $scope.konik_h_s = Number(($scope.c_k_v1*3)/(3.1416*$scope.ust1*$scope.ust1)).toFixed(2)
  $scope.konik_d_s = Number(Math.atan($scope.konik_h_s1/$scope.ust1)*57.3).toFixed(2)
  if($scope.konik_d_s< 55){
    $scope.renk1 = "red" 
  }else{$scope.renk1="black"}

}


$scope.konik_sil_yuk = function(r){
  $scope.k_s_h_m1 = $scope.c_s_v1/(Math.PI*r*r)
  $scope.k_s_h_m = Number($scope.k_s_h_m1).toFixed(2)
  $scope.k_s_h_cm = Number($scope.k_s_h_m1*100).toFixed(2)
  $scope.konik_h_s1 = ($scope.c_k_v1*3)/(3.1416*r*r)
  $scope.konik_h_s = Number(($scope.c_k_v1*3)/(3.1416*r*r)).toFixed(2)
  $scope.konik_d_s = Number(Math.atan($scope.konik_h_s1/r)*57.3).toFixed(2)
}
$scope.hacim_yuk_r = function (toplam_hacim,konik_oran,silindir_h) {
  if (konik_oran > 100 || konik_oran < 0)
  {$scope.error4 = "Oran 100'den büyük, 0'dan küçük olamaz"
  $scope.sil_v="*"
  $scope.r_m1="*"
  $scope.sil_h ="*"
  $scope.r_cm1="*"
  $scope.konik_v="*"
  $scope.konik_h1="*"
  $scope.konik_aci="*"
}
   else{  $scope.sil_h1 = silindir_h*100
    $scope.sil_h = Number($scope.sil_h1).toFixed(2)
    $scope.sil_v1 = toplam_hacim*((100-konik_oran)/100)
    $scope.sil_v = Number($scope.sil_v1).toFixed(2)
    $scope.r_m11 = Math.pow(($scope.sil_v1/(Math.PI*silindir_h)),0.5)
    $scope.r_m1 = Number($scope.r_m11).toFixed(2)
    $scope.r_cm1 = Number($scope.r_m11*100).toFixed(2)
    $scope.konik_v1 = toplam_hacim*(konik_oran/100)
    $scope.konik_v = Number($scope.konik_v1).toFixed(2)
    $scope.konik_h11 = 3*$scope.konik_v1/(Math.PI*Math.pow($scope.r_m11,2))
    $scope.konik_h1 = Number($scope.konik_h11).toFixed(2)
    $scope.konik_aci = Number(Math.atan($scope.konik_h11/$scope.r_m11)*57.3).toFixed(2)}

}

$scope.hacim_yuk_r = function(toplam_hacim1,konik_oran1,yaricap){
  if (konik_oran1 > 100 || konik_oran1 < 0)
  {$scope.error6 = "Oran 100'den büyük, 0'dan küçük olamaz"
  $scope.sil_hacim="*"
  $scope.rcm="*"
  $scope.s_yuk_m ="*"
  $scope.s_yuk_cm="*"
  $scope.konik_hacim="*"
  $scope.konik_yuk="*"
  $scope.koniklik_aci="*"
}
   else{  $scope.rcm = yaricap*100
    $scope.sil_hacim1 = toplam_hacim1*((100-konik_oran1)/100)
    $scope.sil_hcm = Number($scope.sil_hacim1).toFixed(2)
    $scope.s_yuk_m1 = $scope.sil_hacim1/(Math.PI*yaricap*yaricap)
    $scope.s_yuk_m = Number($scope.s_yuk_m1).toFixed(2)
    $scope.s_yuk_cm = Number($scope.s_yuk_m1*100).toFixed(2)
    $scope.konik_hacim1 = toplam_hacim1*(konik_oran1/100)
    $scope.konik_hacim = Number($scope.konik_hacim1).toFixed(2)
    $scope.konik_yuk1 = 3*$scope.konik_hacim1/(Math.PI*yaricap*yaricap)
    $scope.konik_yuk = Number($scope.konik_yuk1).toFixed(2)
    $scope.koniklik_aci =  Number(Math.atan($scope.konik_yuk1/yaricap)*57.3).toFixed(2)}
    

}
$scope.r_h_hacim = function(r_5,s_h_5,k_h_5){
  $scope.rcm_5 = r_5 *100
  $scope.s_yuk_cm_5 = s_h_5 *100 
  $scope.k_yuk_cm_5 = k_h_5 *100
  $scope.s_v_51 = Math.PI*r_5*r_5*s_h_5
  $scope.s_v_5 = Number($scope.s_v_51).toFixed(2)
  $scope.k_v_51 = Math.PI*r_5*r_5*(k_h_5/3)
  $scope.k_v_5 = Number($scope.k_v_51).toFixed(2)
  $scope.toplam_v_5 =Number($scope.s_v_51 + $scope.k_v_51).toFixed(2)
  $scope.k_aci_5 = Number(Math.atan(k_h_5/r_5)*57.3).toFixed(2)

}
$scope.konik_kare_hacim = function (k_h){
  $scope.kare_h_cm = k_h*100
  $scope.kenar_m1 = Math.pow(($scope.c_s_v1/k_h),0.5)
  $scope.kenar_m = Number($scope.kenar_m1).toFixed(2)
  $scope.kenar_cm = Number($scope.kenar_m1*100).toFixed(2)
  $scope.prizma_h1 = 3*$scope.c_k_v1/($scope.kenar_m1*$scope.kenar_m1)
  $scope.prizma_h = Number($scope.prizma_h1).toFixed(2)
  $scope.kare_konik_aci = Number((Math.atan($scope.prizma_h1/($scope.kenar_m1/2))*57.3)).toFixed(2)

  }
$scope.konik_kare_hacim2= function(k_k_l){
  $scope.kare_l_cm = k_k_l*100
  $scope.kare_h_m21 = $scope.c_s_v1/(k_k_l*k_k_l)
  $scope.kare_h_m2 = Number($scope.kare_h_m21).toFixed(2)
  $scope.kare_h_cm2 = Number($scope.kare_h_m21*100).toFixed(2)
  $scope.prizma_h21 = 3*$scope.c_k_v1 /(k_k_l*k_k_l)
  $scope.prizma_h2 = Number($scope.prizma_h21).toFixed(2)
  $scope.kare_konik_aci2 = Number((Math.atan($scope.prizma_h21/(k_k_l/2))*57.3)).toFixed(2)
}
$scope.konik_kare_hacim3=function (tplm_v,knk_orn,h_kare){
  if (knk_orn > 100 || knk_orn < 0){
    $scope.error7 = "Oran 100'den büyük, 0'dan küçük olamaz"
    $scope.kare_v = "*"
    $scope.yuks_kare_cm = "*"
    $scope.kare_h_mt = "*"
    $scope.kare_h_cmt = "*"
    $scope.prizma_v = "*"
    $scope.h_prizma = "*"
    $scope.aci_kare_konik = "*"

}
  else{
    kare_v1 =tplm_v*(100-knk_orn)/100
    $scope.kare_v = Number(kare_v1).toFixed(2) 
    $scope.yuks_kare_cm = h_kare*100
    kare_h_mt = Math.pow(kare_v1/h_kare,0.5)
    $scope.kare_h_mt = Number(kare_h_mt).toFixed(2)
    $scope.kare_h_cmt = Number(kare_h_mt*100).toFixed(2)
    prizma_v = tplm_v * (knk_orn/100)
    $scope.prizma_v = Number(prizma_v).toFixed(2)
    h_prizma = 3 * prizma_v/(kare_h_mt*kare_h_mt)
    $scope.h_prizma = Number(h_prizma).toFixed(2)
    $scope.aci_kare_konik = Number((Math.atan(h_prizma/(kare_h_mt/2)))*57.3).toFixed(2)

  }

}
$scope.konik_kare_hacim4=function (tplm_v1,knk_orn1,l_kenar){
  if (knk_orn1 > 100 || knk_orn1 < 0){
    $scope.error8 = "Oran 100'den büyük, 0'dan küçük olamaz"
    $scope.v_kare = "*"
    $scope.kenar_l_cm = "*"
    $scope.h_kare_m = "*"
    $scope.h_kare_cm = "*"
    $scope.v_przma = "*"
    $scope.h_przma = "*"
    $scope.aci_kare_knk = "*"

}
  else{
    v_kare = tplm_v1*((100-knk_orn1)/100)
    $scope.v_kare = Number(v_kare).toFixed(2)
    $scope.kenar_l_cm = l_kenar*100
    h_kare_m = v_kare/(l_kenar*l_kenar)
    $scope.h_kare_m = Number(h_kare_m).toFixed(2)
    $scope.h_kare_cm = Number(h_kare_m*100).toFixed(2)
    v_przma = tplm_v1*knk_orn1/100
    $scope.v_przma = Number(v_przma).toFixed(2)
    h_przma = 3*v_przma/(l_kenar*l_kenar)
    $scope.h_przma = Number(h_przma).toFixed(2)
    $scope.aci_kare_knk = Number((Math.atan(h_przma/(l_kenar/2)))*57.3).toFixed(2)



  }

}
$scope.konik_kare_hacim5 = function (kenar_l_5,kare_h_5,przm_h_5) {
  karekenarboyucm = kenar_l_5*100
  $scope.kare_knr_l = Number(karekenarboyucm).toFixed(2)
  kareyukseklikcm = kare_h_5*100
  $scope.kare_yuks = Number(kareyukseklikcm).toFixed(2)
  prizmayukseklikcm = przm_h_5*100
  $scope.przm_yuks = Number(prizmayukseklikcm).toFixed(2)
  karehacim = kare_h_5*kenar_l_5*kenar_l_5
  $scope.kare_hcm = Number(karehacim).toFixed(2)
  prizmahacim = (kenar_l_5*kenar_l_5*przm_h_5)/3
  $scope.przm_hcm = Number(prizmahacim).toFixed(2)
  toplamhacim = karehacim + prizmahacim
  $scope.toplam_hcm = Number(toplamhacim).toFixed(2)
  $scope.knk_aci = Number((Math.atan(przm_h_5/(kenar_l_5/2)))*57.3).toFixed(2)
}

$scope.yuks = function (ic_r,delik_r){
  boru_k_a = Math.PI*(ic_r*ic_r)/4
  $scope.boru_k_a =  Number(boru_k_a).toFixed(2)
  delik_k_a = Math.PI*(delik_r*delik_r)/4
  $scope.delik_k_a = Number(delik_k_a).toFixed(2)
  tane_delik = (boru_k_a / delik_k_a) +1
  $scope.tane_delik = Number(tane_delik).toFixed(0)

}
$scope.cap = function (ic_r_1,delik_tane) {
  boru_k_a_1 = Math.PI*(ic_r_1*ic_r_1)/4
  $scope.boru_k_a_1 = Number(boru_k_a_1).toFixed(2)
  delik_k_a_1 = boru_k_a_1/delik_tane
  $scope.delik_k_a_1 = Number(delik_k_a_1).toFixed(2)
  $scope.min_cap = Number(Math.pow(4*delik_k_a_1/Math.PI,0.5)).toFixed(2)

}


//$scope.deneme = function(){

  //var xhttp = new XMLHttpRequest();
  //xhttp.onreadystatechange = function() {
    //if (this.readyState == 4 && this.status == 200) {     
      //$scope.sonuc = this.responseText
    //}
  //};
  //xhttp.open("GET", "http://192.168.10.198:3002/", true);
  //xhttp.send();
//}


$scope.boru = function() {
  var alertPopup = $ionicPopup.alert({
    title: 'Boru & Çap:' ,
    template: '<img class="full-image custom"src="/img/boru.png"> '
    
})}

$scope.konik = function() {
  var alertPopup = $ionicPopup.alert({
    title: 'Boru & Çap:' ,
    template: '<img class="full-image custom"src="/img/konik.png"> '
    
})}

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


}}).controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Tesis Verim', adres: 'verim', id: 0 },
    { title: 'Standart Tank Hacim Hesabı ', adres: 'tank', id: 1 },
    { title: 'Konik Tabanlı Tank Hacim Hesabı', adres:'koniktank', id: 2 },
    { title: 'Boru Delik Çap&Hız Hesabı', adres:'boru', id: 3 },
   { title: 'Biz Kimiz?',adres: 'tanitim', id: 4 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

