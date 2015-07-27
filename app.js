var food = angular.module('food', ['ngRoute','ngAnimate','angular-preload-image', 'ngSanitize', 'ui.router', 'ionic'])
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
                when('/review', {
                    templateUrl: 'views/review.html',
                    controller: 'ReviewCtrl'
                }).
                when('/credit-card', {
                    templateUrl: 'views/credit_card.html',
                    controller: 'CreditCardCtrl'
                }).
                otherwise({
                    redirectTo: '/login'
                });
        }]);

food.directive('pageTitle', function ($rootScope) {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        template: '',
        link: function(scope, elem, attr, ctrl, trans){
            trans(scope, function(clone){
                $rootScope.pageTitle = clone[0].textContent;
            })
        }
    };
});