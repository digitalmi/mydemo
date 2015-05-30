repoListModule.controller('repoListController', ['$scope','getRepositoryServices',function ($scope,getRepositoryServices) {

    $scope.Language=localeString.language;
    $scope.Size=localeString.size;


    if(getRepositoryServices)
       $scope.repository=getRepositoryServices.getData();

$scope.openUrl=function(url){
	window.open(url, '_system');
}
   
}]);
