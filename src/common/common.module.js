(function(){
'use strict'

angular.module('common', [])
.config(config)
.constant('ApiPath', 'https://rjp-course5.herokuapp.com');

config.$inject = ['$httpProvider'];
function config(httpProvider){
	httpProvider.interceptors.push('loadingHttpInterceptor');
}


})();