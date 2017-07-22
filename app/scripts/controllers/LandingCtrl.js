(function() {
    function LandingCtrl($anchorScroll, Albums, Email, $stateParams, $location, $state, Carousel) {
        
        /*
        * @desc home page Bootstrap billboard
        */
        
        this.myInterval = 7000;
        this.active = 0;
                   
        this.slides = Carousel.carousel;
        
        /*
        * @desc ensures page loads at top of page 
        */
        
        window.scrollTo(0,0);
        
        /*
        * @desc uses $anchorScroll provider to make footer work
        */
        
        this.gotoTop = function() {
            $location.hash("top");
            
            $anchorScroll();
            
            $location.hash(null);
        };
        
        /*
         * @desc calls for and returns last two album indexes to landing.html
         */
        
        this.albums = Albums.returnArrayHomepage();
        
        /*
         * @desc sends email address to Email service and adds to firebase
         */
        
        this.newEmail = Email;
        
    }
    
    angular
        .module('grabbing-clouds')
        .controller('LandingCtrl', ['$anchorScroll', 'Albums', 'Email', '$stateParams', '$location', '$state', 'Carousel', LandingCtrl]);
})();