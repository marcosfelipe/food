food.controller('AppCtrl', function($rootScope, config){
    $rootScope.publicApiUrl = config.publicApiUrl;
});

food.controller('LoginCtrl', ['$scope', '$http',
    function ($scope, $http) {


    }]);
food.controller('RestaurantSelectCtrl', function ($scope, RestaurantService) {

    RestaurantService.list().success(function(data, status){
        $scope.restaurants = data.restaurants;
    })

});
food.controller('FoodSelectCtrl', function ($scope, FoodService) {

    FoodService.list().success(function (data, status) {
        $scope.foods = data.foods;
    })

});
