(function() {
    function LandingCtrl($anchorScroll, $location, Fixtures) {
        
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
         * @desc sends last two album indexs to homepage html
         */
        
        this.albums = Fixtures.returnArrayHomepage();
        
       // console.log(this.albums);
        
    }
    
    angular
        .module('grabbing-clouds')
        .controller('LandingCtrl', ['$anchorScroll', '$location', 'Fixtures', LandingCtrl]);
})();