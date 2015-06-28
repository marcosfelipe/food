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
        angular.forEach(data.foods, function(food){
            food.chose = false;
            food.amount = 0;
        });
        $scope.foods = data.foods;
    }).error(function(){
        location = '#/restaurant-select';
    });

    $scope.showDetail = function(data){
        $scope.food_id = data.id;
        $scope.food_name = data.name;
        $scope.food_description = data.description;
        $('.ui.modal').modal('show');
    };

    $scope.check = function(food_id, amount){
        angular.forEach($scope.foods, function(food){
            if(food.id == food_id){
                food.chose = true;
                food.amount = amount;
            }
        });
    };

    $scope.uncheck = function(food_id){
        angular.forEach($scope.foods, function(food){
            if(food.id == food_id){
                food.chose = false;
            }
        });
    };

});
