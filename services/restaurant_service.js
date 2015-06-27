food.factory('RestaurantService', function($http, config) {
    return {

        list: function(){
            return $http.get(config.apiUrl + 'stadiums/' + config.stadiumId + '/restaurants');
        }

    };
});