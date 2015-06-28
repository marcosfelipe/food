var food = angular.module('food', ['ngRoute','ngAnimate','angular-preload-image'])
    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginCtrl'
                }).
                when('/restaurant-select', {
                    templateUrl: 'views/restaurant_select.html',
                    controller: 'RestaurantSelectCtrl'
                }).
                when('/food-select', {
                    templateUrl: 'views/food_select.html',
                    controller: 'FoodSelectCtrl'
                }).
                otherwise({
                    redirectTo: '/login'
                });
        }]);

food.directive('pageTitle', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        template: '<h2 class="ui dividing header inverted center aligned page-header" ng-transclude></h2>'
    };
});