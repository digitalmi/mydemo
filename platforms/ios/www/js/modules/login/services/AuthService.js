/**
 * @ngdoc service
 * @name loginModule.authService
 * @requires $resource
 * @requires $log
 * @requires $filter
 * @requires githubDemo.ajaxService
 * @requires githubDemo.CONSTANTS
 * @requires $http
 * @requires ajaxRequestServices
 * @description
 * authService is used for authentication purpose.
 */
angular.module('loginModule.loginModuleServices', ['ajaxRequestServicesModule'])
.service('getRepositoryServices', ['$resource','$log','$q','$http','ajaxRequestServices',function($resource,$log,$q,$http,ajaxRequestServices) {

    this.serverUrl="getUserRepo";
    this.httpurl=null;
    this.response=null;

    /**
     * @ngdoc method
     * @name loginModule.authService#getProfileRequest
     * @methodOf loginModule.authService
     * @param {object} credentials credential object
     * @description
     * doLogin method is for authenticating the user credentials
     * @returns {object} Promise Promise Object
     */

    this.getProfileRequest=function(data)
    {
        // the $http API is based on the deferred/promise APIs exposed by the $q service
        // so it returns a promise for us by default

        var data=(data)?data:null;
        var me=this;
        var deferred = $q.defer();
        this.httpurl=ajaxRequestServices.getURL(this.serverUrl);
        var url =this.httpurl;
        var method = (ajaxRequestServices.postMethod.indexOf(serverUrl) !== -1) ? 'POST' : 'GET';

        //Need to check for all the api
        if (data) {
            if (method === 'GET') {
                url = url.replace('{param}',data);

            }
            else // POST
            {
                request.data = data;

            }

        }
        return $http.get(url);

        };

        this.setData=function(response)
        {
            this.response=response;
        
        };
        this.getData=function(){

            return this.response;
    };

}]);



