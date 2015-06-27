var food = angular.module('food', ['ngRoute'])
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
                otherwise({
                    redirectTo: '/login'
                });
        }]);