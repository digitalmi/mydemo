/**
 * @ngdoc controller
 * @name loginModule.loginController
 * @requires $scope
 * @requires $rootScope
 * @requires loginModule.authService
 * @requires githubDemo.CONSTANTS
 * @requires $state
 * @requires $log
 * @requires $filter
 * @requires $ionicPopup
 * @requires userManagerModule.userService
 * @requires $ionicHistory
 * @description
 * loginController Controller performs the authentication with help of authService and broadcasts the events to other modules
 *
 * */


angular.module('loginModule.loginController', [])
    .controller('loginController', ['$scope', '$rootScope','getRepositoryServices','$ionicLoading','$state', function ($scope, $rootScope,getRepositoryServices,$ionicLoading,$state) {

        $scope.buttonLabel = localeString.button;
        $scope.loginData = {
            userId: ''

        };

        $scope.init = function () {


        };

        /**
         * @ngdoc method
         * @name loginModule.loginController#doLogin
         * @methodOf loginModule.loginController
         * @description
         * Invokes authService and performs authentication
         */
        $scope.doLogin = function () {

            var data = "digitalmi";

            data = $scope.loginData.userId;

            console.log("UserId");
            console.log($scope.loginData.userId);


            if (getRepositoryServices) {
                //


                $ionicLoading.show({
                    template: '<i class="icon ion-ios7-reloading">Loading ...</i>'
                });

                getRepositoryServices.getProfileRequest(data).then(
                    function (response) {
                        console.log("Success data");
                        console.log(response);

                        $ionicLoading.hide();

                 getRepositoryServices.setData(response.data);

                        $state.go('app.repoList');

                    },
                    function (data) {
                        console.log("Failure data");
                        console.log(data);

                        $ionicLoading.hide();
                    }
                );


            }


        };


    }]);
