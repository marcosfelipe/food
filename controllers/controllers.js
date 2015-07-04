food.controller('AppCtrl', function ($rootScope, config, RestaurantService) {
    RestaurantService.list().success(function (data, status) {
        angular.forEach(data.restaurants, function(restaurant){
            restaurant.image = new Image();
            restaurant.image.src = config.publicApiUrl + restaurant.avatar_url;
        });
        $rootScope.restaurants = data.restaurants;
    });
});

food.controller('LoginCtrl', ['$scope', '$http',
    function ($scope, $http) {


    }]);
food.controller('RestaurantSelectCtrl', function ($rootScope, $scope) {
    $scope.setRestaurant = function (id) {
        $rootScope.restaurantId = id;
    };
});
food.controller('FoodSelectCtrl', function ($rootScope, $scope, FoodService, config) {

    FoodService.list($rootScope.restaurantId).success(function (data, status) {
        angular.forEach(data.foods, function (food) {
            food.chose = false;
            food.amount = 0;
            food.image = config.publicApiUrl + food.avatar_url;
        });
        $rootScope.foods = data.foods;
    }).error(function () {
        location = '#/restaurant-select';
    });

    $scope.showDetail = function (data) {
        $scope.food_id = data.id;
        $scope.food_name = data.name;
        $scope.food_description = data.description;
        $('.ui.modal').modal('show');
    };

    $scope.check = function (food_id, amount) {
        angular.forEach($scope.foods, function (food) {
            if (food.id == food_id) {
                food.chose = true;
                food.amount = amount;
            }
        });
    };

    $scope.uncheck = function (food_id) {
        angular.forEach($scope.foods, function (food) {
            if (food.id == food_id) {
                food.chose = false;
            }
        });
    };

});

food.controller('ReviewCtrl', function($scope, $rootScope){
    $scope.getTotal = function(){
        total = 0;
        angular.forEach($rootScope.foods, function(food){
            if(food.chose) total = total + (food.price * food.amount);
        });
        return total;
    };
});

food.controller('CreditCardCtrl', function($scope, $rootScope){

    $scope.verifyFields = function(){
        if($scope.holder_name != undefined && $scope.card_number_1 != undefined
        && $scope.card_number_2 != undefined && $scope.card_number_2 != undefined
        && $scope.card_number_4 != undefined && $scope.cvc_code == undefined
        && $scope.expiration_month != undefined && $scope.expiration_year != undefined){
            $scope.turn = true;
        }
    };

});
