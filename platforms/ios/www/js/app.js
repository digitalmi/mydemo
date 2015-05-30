// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('githubDemoApp', ['ionic','ngResource','ajaxRequestServicesModule','loginModule.loginModuleServices','loginModule','repoListModule','AppConfigurationModule'])
.run(['$ionicPlatform','$rootScope','AppConfiguration',
        function($ionicPlatform,$rootScope,AppConfiguration) {
        $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

      console.log("Angular JS Ionic ready");

      if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
          StatusBar.styleDefault();
      }


        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            console.log('changed to state ' + toState.name);

        });

        $rootScope.$on('$stateNotFound', function(event, unfoundState, fromState, fromParams){
            console.log('stateNotFound: ' + unfoundState.to);

        });

        $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
            console.log('stateChangeError: ' + toState.name);
            console.log(error) // change
        });

        if(AppConfiguration) {
            AppConfiguration.init(localeString.applicationMode);
        }


  }])
   .factory("AuthInterceptor", function ($q) {
        return {
            // interceptor configuration here

            responseError: function(responseError,response) {

                if (responseError.status === 304) {
                    //redirect user to login or do something else...
                    console.log('intercepted  304. Lets authenticate');

                    debugger;

                    //authenticate the user
                    //AuthSvc.authenticate();



                }
                return $q.reject(responseError);
            }


        };
    })


        .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$ionicConfigProvider',
            function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {
            

                $httpProvider.interceptors.push('AuthInterceptor');

            $stateProvider.state('app', {
                abstract: true,
                template: '<ion-nav-bar><ion-nav-back-button class="button-clear"><i class="ion-arrow-left-c"></i></ion-nav-back-button></ion-nav-bar><ion-nav-view></ion-nav-view>'
                //controller: 'appController'
            }).state('app.login', {
				url: '/login',
				//cache: false,
				templateUrl: 'js/modules/login/templates/_login.html',
				controller: 'loginController'
            }).state('app.repoList', {
				url : '/repoList',
				templateUrl : 'js/modules/repoList/templates/_repoList.html',
				controller : 'repoListController'
			});

                // Send to login if the URL was not found
            $urlRouterProvider.otherwise("/login");
            }])



