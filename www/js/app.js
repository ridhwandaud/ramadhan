// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {



    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }

    if (typeof analytics !== 'undefined'){
      analytics.startTrackerWithId('UA-64397767-1');
      analytics.trackView('name-of-template');
      // analytics.trackView('Screen Title');
      analytics.trackEvent('Category', 'Action', 'Label', Value);
      analytics.trackException('Description', Fatal);
      analytics.trackTiming('Category', IntervalInMilliseconds, 'Variable', 'Label');
    } else {
      console.log("Google Analytics plugin could not be loaded.");
    }
  });
})
 
.filter('hrefToJS', function ($sce, $sanitize) {
    return function (text) {
        var regex = /href="([\S]+)"/g;
        var newString = $sanitize(text).replace(regex, "onClick=\"window.open('$1', '_blank', 'location=yes')\"");
        return $sce.trustAsHtml(newString);
    }
})
 


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.puasa', {
    url: '/puasa',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/tab-puasa.html',
        controller: 'PuasaCtrl'
      }
    }
  })

  .state('tab.puasa-definisi', {
    url: '/puasa/definisi',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/definisi.html',
      }
    }
  })

  .state('tab.puasa-syarat', {
    url: '/puasa/syarat',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/syarat-wajib.html',
      }
    }
  })

  .state('tab.puasa-niat', {
    url: '/puasa/niat',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/niat.html',
      }
    }
  })

  .state('tab.puasa-pembatalan', {
    url: '/puasa/pembatalan',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/batal.html',
      }
    }
  })

  .state('tab.puasa-sunat', {
    url: '/puasa/sunat',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/sunat.html',
      }
    }
  })

  .state('tab.puasa-makruh', {
    url: '/puasa/makruh',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/makruh.html',
      }
    }
  })

  .state('tab.puasa-uzur', {
    url: '/puasa/uzur',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/uzur.html',
      }
    }
  })

  .state('tab.puasa-qadha', {
    url: '/puasa/qadha',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/qadha.html',
      }
    }
  })

  .state('tab.puasa-fidyah', {
    url: '/puasa/fidyah',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/fidyah.html',
      }
    }
  })

  .state('tab.puasa-doa-quran', {
    url: '/puasa/doa-quran',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/doa-quran.html',
      }
    }
  })

  .state('tab.puasa-doa-sunnah', {
    url: '/puasa/doa-sunnah',
    views: {
      'tab-puasa': {
        templateUrl: 'templates/puasa/doa-sunnah.html',
      }
    }
  })

  .state('tab.terawih', {
    url: '/terawih',
    views: {
      'tab-terawih': {
        templateUrl: 'templates/tab-terawih.html',
      }
    }
  })

  .state('tab.terawih-hukum', {
    url: '/terawih/hukum',
    views: {
      'tab-terawih': {
        templateUrl: 'templates/terawih/hukum.html',
      }
    }
  })

  .state('tab.terawih-waktu', {
    url: '/terawih/waktu',
    views: {
      'tab-terawih': {
        templateUrl: 'templates/terawih/waktu.html',
      }
    }
  })

  .state('tab.terawih-rakaat', {
    url: '/terawih/rakaat',
    views: {
      'tab-terawih': {
        templateUrl: 'templates/terawih/rakaat.html',
      }
    }
  })

  .state('tab.terawih-rukun', {
    url: '/terawih/rukun',
    views: {
      'tab-terawih': {
        templateUrl: 'templates/terawih/rukun.html',
      }
    }
  })

  .state('tab.terawih-bacaan', {
    url: '/terawih/bacaan',
    views: {
      'tab-terawih': {
        templateUrl: 'templates/terawih/bacaan.html',
      }
    }
  })

  .state('tab.terawih-niat', {
    url: '/terawih/niat',
    views: {
      'tab-terawih': {
        templateUrl: 'templates/terawih/niat.html',
      }
    }
  })

  .state('tab.terawih-dalil', {
    url: '/terawih/dalil',
    views: {
      'tab-terawih': {
        templateUrl: 'templates/terawih/dalil.html',
      }
    }
  })

  .state('tab.zakat', {
    url: '/zakat',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/tab-zakat.html',
      }
    }
  })

  .state('tab.zakat-definisi', {
    url: '/zakat/definisi',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/zakat/definisi.html',
      }
    }
  })

  .state('tab.zakat-syarat', {
    url: '/zakat/syarat',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/zakat/syarat.html',
      }
    }
  })

  .state('tab.zakat-waktu', {
    url: '/zakat/waktu',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/zakat/waktu.html',
      }
    }
  })

  .state('tab.zakat-lafaz', {
    url: '/zakat/lafaz',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/zakat/lafaz.html',
      }
    }
  })

  .state('tab.zakat-kadar', {
    url: '/zakat/kadar',
    views: {
      'tab-zakat': {
        templateUrl: 'templates/zakat/kadar.html',
      }
    }
  })

  .state('tab.waktu', {
    url: '/waktu',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/tab-waktu.html',
      }
    }
  })

  .state('tab.waktu-perlis', {
    url: '/waktu/perlis',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/perlis.html',
      }
    }
  })
  .state('tab.waktu-kedah', {
    url: '/waktu/kedah',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kedah.html',
      }
    }
  })
  .state('tab.waktu-kedah-1', {
    url: '/waktu/kedah/1',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kedah/1.html',
      }
    }
  })
  .state('tab.waktu-kedah-2', {
    url: '/waktu/kedah/2',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kedah/2.html',
      }
    }
  })
  .state('tab.waktu-kedah-3', {
    url: '/waktu/kedah/3',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kedah/3.html',
      }
    }
  })
  .state('tab.waktu-kedah-4', {
    url: '/waktu/kedah/4',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kedah/4.html',
      }
    }
  })
  .state('tab.waktu-kedah-5', {
    url: '/waktu/kedah/5',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kedah/5.html',
      }
    }
  })
  .state('tab.waktu-kedah-6', {
    url: '/waktu/kedah/6',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kedah/6.html',
      }
    }
  })
  .state('tab.waktu-kedah-7', {
    url: '/waktu/kedah/7',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kedah/7.html',
      }
    }
  })
  .state('tab.waktu-penang', {
    url: '/waktu/penang',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/penang.html',
      }
    }
  })
  .state('tab.waktu-perak', {
    url: '/waktu/perak',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/perak.html',
      }
    }
  })
  .state('tab.waktu-perak-1', {
    url: '/waktu/perak/1',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/perak/1.html',
      }
    }
  })
  .state('tab.waktu-perak-2', {
    url: '/waktu/perak/2',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/perak/2.html',
      }
    }
  })
  .state('tab.waktu-perak-3', {
    url: '/waktu/perak/3',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/perak/3.html',
      }
    }
  })
  .state('tab.waktu-perak-4', {
    url: '/waktu/perak/4',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/perak/4.html',
      }
    }
  })
  .state('tab.waktu-perak-5', {
    url: '/waktu/perak/5',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/perak/5.html',
      }
    }
  })
  .state('tab.waktu-perak-6', {
    url: '/waktu/perak/6',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/perak/6.html',
      }
    }
  })
  .state('tab.waktu-perak-7', {
    url: '/waktu/perak/7',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/perak/7.html',
      }
    }
  })
  .state('tab.waktu-selangor', {
    url: '/waktu/selangor',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/selangor.html',
      }
    }
  })
  .state('tab.waktu-selangor-1', {
    url: '/waktu/selangor/1',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/selangor/1.html',
      }
    }
  })
  .state('tab.waktu-selangor-2', {
    url: '/waktu/selangor/2',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/selangor/2.html',
      }
    }
  })
  .state('tab.waktu-kl', {
    url: '/waktu/kl',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kl.html',
      }
    }
  })
  .state('tab.waktu-putrajaya', {
    url: '/waktu/putrajaya',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/putrajaya.html',
      }
    }
  })
  .state('tab.waktu-ns', {
    url: '/waktu/ns',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/ns.html',
      }
    }
  })
  .state('tab.waktu-ns-1', {
    url: '/waktu/ns/1',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/ns/1.html',
      }
    }
  })
  .state('tab.waktu-ns-2', {
    url: '/waktu/ns/2',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/ns/2.html',
      }
    }
  })
  .state('tab.waktu-melaka', {
    url: '/waktu/melaka',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/melaka.html',
      }
    }
  })
  .state('tab.waktu-johor', {
    url: '/waktu/johor',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/johor.html',
      }
    }
  })
  .state('tab.waktu-johor-1', {
    url: '/waktu/johor/1',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/johor/1.html',
      }
    }
  })
  .state('tab.waktu-njohors-2', {
    url: '/waktu/johor/2',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/johor/2.html',
      }
    }
  })
  .state('tab.waktu-johor-3', {
    url: '/waktu/johor/3',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/johor/3.html',
      }
    }
  })
  .state('tab.waktu-johor-4', {
    url: '/waktu/johor/4',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/johor/4.html',
      }
    }
  })
  
  .state('tab.waktu-pahang', {
    url: '/waktu/pahang',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/pahang.html',
      }
    }
  })
  .state('tab.waktu-pahang-1', {
    url: '/waktu/pahang/1',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/pahang/1.html',
      }
    }
  })
  .state('tab.waktu-pahang-2', {
    url: '/waktu/pahang/2',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/pahang/2.html',
      }
    }
  })
  .state('tab.waktu-pahang-3', {
    url: '/waktu/pahang/3',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/pahang/3.html',
      }
    }
  })
  .state('tab.waktu-pahang-4', {
    url: '/waktu/pahang/4',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/pahang/4.html',
      }
    }
  })
  .state('tab.waktu-pahang-5', {
    url: '/waktu/pahang/5',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/pahang/5.html',
      }
    }
  })
  .state('tab.waktu-pahang-6', {
    url: '/waktu/pahang/6',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/pahang/6.html',
      }
    }
  })
  .state('tab.waktu-terengganu', {
    url: '/waktu/terengganu',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/terengganu.html',
      }
    }
  })
  .state('tab.waktu-terengganu-1', {
    url: '/waktu/terengganu/1',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/terengganu/1.html',
      }
    }
  })
  .state('tab.waktu-terengganu-2', {
    url: '/waktu/terengganu/2',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/terengganu/2.html',
      }
    }
  })
  .state('tab.waktu-terengganu-3', {
    url: '/waktu/terengganu/3',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/terengganu/3.html',
      }
    }
  })
  .state('tab.waktu-terengganu-4', {
    url: '/waktu/terengganu/4',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/terengganu/4.html',
      }
    }
  })
  .state('tab.waktu-kelantan', {
    url: '/waktu/kelantan',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kelantan.html',
      }
    }
  })
  .state('tab.waktu-kelantan-1', {
    url: '/waktu/kelantan/1',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kelantan/1.html',
      }
    }
  })
  .state('tab.waktu-kelantan-2', {
    url: '/waktu/kelantan/2',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/kelantan/2.html',
      }
    }
  })
  .state('tab.waktu-sarawak', {
    url: '/waktu/sarawak',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sarawak.html',
      }
    }
  })
  .state('tab.waktu-sarawak-1', {
    url: '/waktu/sarawak/1',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sarawak/1.html',
      }
    }
  })
  .state('tab.waktu-sarawak-2', {
    url: '/waktu/sarawak/2',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sarawak/2.html',
      }
    }
  })
  .state('tab.waktu-sarawak-3', {
    url: '/waktu/sarawak/3',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sarawak/3.html',
      }
    }
  })
  .state('tab.waktu-sarawak-4', {
    url: '/waktu/sarawak/4',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sarawak/4.html',
      }
    }
  })
  .state('tab.waktu-sarawak-5', {
    url: '/waktu/sarawak/5',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sarawak/5.html',
      }
    }
  })
  .state('tab.waktu-sarawak-6', {
    url: '/waktu/sarawak/6',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sarawak/6.html',
      }
    }
  })
  .state('tab.waktu-sarawak-7', {
    url: '/waktu/sarawak/7',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sarawak/7.html',
      }
    }
  })
  .state('tab.waktu-sarawak-8', {
    url: '/waktu/sarawak/8',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sarawak/8.html',
      }
    }
  })
  .state('tab.waktu-sarawak-9', {
    url: '/waktu/sarawak/9',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sarawak/9.html',
      }
    }
  })
  .state('tab.waktu-sabah', {
    url: '/waktu/sabah',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sabah.html',
      }
    }
  })
  .state('tab.waktu-sabah-1', {
    url: '/waktu/sabah/1',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sabah/1.html',
      }
    }
  })
  .state('tab.waktu-sabah-2', {
    url: '/waktu/sabah/2',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sabah/2.html',
      }
    }
  })
  .state('tab.waktu-sabah-3', {
    url: '/waktu/sabah/3',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sabah/3.html',
      }
    }
  })
  .state('tab.waktu-sabah-4', {
    url: '/waktu/sabah/4',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sabah/4.html',
      }
    }
  })
  .state('tab.waktu-sabah-5', {
    url: '/waktu/sabah/5',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sabah/5.html',
      }
    }
  })
  .state('tab.waktu-sabah-6', {
    url: '/waktu/sabah/6',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sabah/6.html',
      }
    }
  })
  .state('tab.waktu-sabah-7', {
    url: '/waktu/sabah/7',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sabah/7.html',
      }
    }
  })
  .state('tab.waktu-sabah-8', {
    url: '/waktu/sabah/8',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sabah/8.html',
      }
    }
  })
  .state('tab.waktu-sabah-9', {
    url: '/waktu/sabah/9',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/sabah/9.html',
      }
    }
  })
  .state('tab.waktu-labuan', {
    url: '/waktu/labuan',
    views: {
      'tab-waktu': {
        templateUrl: 'templates/waktu/labuan.html',
      }
    }
  })

  .state('tab.log', {
    url: '/log',
    views: {
      'tab-log': {
        templateUrl: 'templates/tab-log.html',
      }
    }
  })

  .state('tab.soal', {
    url: '/soal',
    views: {
      'tab-soal': {
        templateUrl: 'templates/tab-soal.html',
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/puasa');

});
