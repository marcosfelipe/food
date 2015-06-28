food.controller('AppCtrl', function($rootScope, config){
    $rootScope.publicApiUrl = config.publicApiUrl;
});

food.controller('LoginCtrl', ['$scope', '$http',
    function ($scope, $http) {


    }]);
food.controller('RestaurantSelectCtrl', function ($rootScope, $scope, RestaurantService) {
    RestaurantService.list().success(function(data, status){
        $scope.restaurants = data.restaurants;
    });

    $scope.setRestaurant = function(id){
        $rootScope.restaurantId = id;
    };
});
food.controller('FoodSelectCtrl', function ($rootScope, $scope, FoodService) {

    FoodService.list($rootScope.restaurantId).success(function (data, status) {
        $scope.foods = data.foods;
    }).error(function(){
        location = '#/restaurant-select';
    });

    $scope.showDetail = function(data){
        $scope.food_name = data.name;
        $scope.food_description = data.description;
        $('.ui.modal').modal('show');
    };

});
