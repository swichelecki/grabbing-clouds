(function() {
    function NewsCtrl($anchorScroll, $location, Fixtures) {
        
       /*
        * @desc ensures page loads at top of page 
        */
        
        window.scrollTo(0,0);
        
       /*
        * desc uses $anchorScroll provider to make footer work
        */
        
        this.gotoTop = function() {
            $location.hash("top");
            
            $anchorScroll();
            
            $location.hash(null);
        };
        
        /*
         * @desc returns news data to template
         */
        
        this.news = Fixtures.returnNewsArray(1);
        
    }
    
    angular
        .module('grabbing-clouds')
        .controller('NewsCtrl', ['$anchorScroll', '$location', 'Fixtures', NewsCtrl]);
})();