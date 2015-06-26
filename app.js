new Vue({

    el: '#app',

    data:{
        currentTab: 'tab1'
    },

    methods: {

        setTab: function(name){
            this.currentTab = name;
        }

    },

    ready: function(){
        setTimeout(function() {
            new Swiper('#restaurants_swiper', {
                pagination: '#restaurants_swiper_pagination',
                slidesPerView: 2,
                slidesPerColumn: 2,
                paginationClickable: true,
                spaceBetween: 30
            });

            new Swiper('#foods_swiper', {
                pagination: '#foods_swiper_pagination',
                direction: 'vertical',
                slidesPerView: 1,
                paginationClickable: true,
                spaceBetween: 30
            });
        },2000);
    }

});

