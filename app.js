var food = angular.module('food', ['ngRoute','ngAnimate'])
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
        template: '<h1 class="ui dividing header inverted center aligned" ng-transclude></h1>'
    };
});