'use strict';

var app = angular.module('gntelCqmsApp', [
    'ngRoute'
]);
app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                /* templateUrl: 'views/contents/052_M_1000_login.html'*/
                /*templateUrl: 'views/contents/052-1000-CV_happen.html'*/
                templateUrl: '/src/app/Mobile/S01-2000/S01-2000.html'
            })
            .when('/product_insert_Manage', {
                templateUrl: '/src/app/Mobile/S01-2001/S01-2001.html'
            })
            .when('/product_insert', {
                templateUrl: '/src/app/Mobile/S01-2010/S01-2010.html'
            })
            .when('/camera_start', {

                templateUrl: '/src/app/Mobile/S01-2010/037-r_camera.html'
            })
            .otherwise({
                redirectTo: '/'
            });

        $locationProvider.html5Mode(true);
    });

app.directive('ngConfirmClick', [
    function(){
        return {
            priority: -1,
            restrict: 'A',
            link: function(scope, element, attrs){
                element.bind('click', function(e){
                    var message = attrs.ngConfirmClick;
                    if(message && !confirm(message)){
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    }
                });
            }
        }
    }
]);

