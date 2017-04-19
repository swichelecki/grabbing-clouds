(function() {
    function NewsCtrl($anchorScroll, $location, Fixtures, News) {
               
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
        
        // FIXTURES  this.news = Fixtures.returnNewsArray(1);
        
        /*
         * @desc returns news data to template from News service
         */
        
        this.news = News;
        
        /*
         * @desc hides bottom border if object index is 0
         */
        
        this.hide = function(data) {
             
             if (data.index == 0) {
                 
                return { 'display': 'none' }
            } 
        };
       
    }
    
    angular
        .module('grabbing-clouds')
        .controller('NewsCtrl', ['$anchorScroll', '$location', 'Fixtures', 'News', NewsCtrl]);
})();