(function() {
    function AdminCtrl(Albums, News, Carousel) {
        
        /*
        * @desc returns album data to template from Album service
        */
        
        this.albums = Albums;
        
        /*
        * @desc returns news data to template from News service
        */
        
        this.news = News;
                
        /*
        * @desc returns carousel data to template from Carousel service
        */
        
        this.carousel = Carousel;
    }
    
    angular
        .module('grabbing-clouds')
        .controller('AdminCtrl', ['Albums', 'News', 'Carousel', AdminCtrl]); 
})();