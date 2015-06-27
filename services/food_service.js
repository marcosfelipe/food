food.factory('FoodService', function($http, config) {
    return {

        list: function(restaurantId){
            return $http.get(config.apiUrl + 'restaurants/' + restaurantId + '/foods');
        }

    };
});