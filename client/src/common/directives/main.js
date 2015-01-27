'use strict';

angular.module('gntelCqmsApp')
    .controller('MainCtrl', function ($scope, $http, $route, $rootScope, $location) {
        $http.get('/api/awesomeThings').success(function (awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.sideClass= function(index){
            $scope.index=index;
            console.log("INDEX"+index);
        }

       /* var layout = 0;

        console.log($location.url());

        switch($location.url()) {
            case '':
                layout = 0;
                console.log("1");
                break;
            case '/#/':
                layout = 0;
                console.log("2");
                break;
            case '/camera_start':
                layout = 1;
                console.log("3");
                break;
            default:
                layout = 0;
                console.log("4");
                break;
        };

        $rootScope.layout = layout;
        $route.reload();

        $scope.tryLogin = function() {
            $scope.login();
        };


        $scope.login = function() {
            $rootScope.layout = true;
            $location.url('/login');
        };


        $scope.kkk = function() {
            $scope.kk();
        };

        $scope.kk = function() {
            $rootScope.layout = 1;
            $location.url('/camera_start');

        };

        $scope.home = function() {
            $location.url('/home');
        };

        $scope.logout = function() {
            $rootScope.layout = false;
            $location.url('/');
        };*/
    }).controller('131',function($scope){

    });
