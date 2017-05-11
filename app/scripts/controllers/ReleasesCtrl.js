(function() {
    function ReleasesCtrl(Fixtures, Albums) {
        
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
        * @desc brings album object data to html
        */
        
       // FIXTURE DATA CALL this.albums = Fixtures.returnDataArray(1);
        
        /*
        * @desc brings album object data to template from firebase
        */
       
         this.albums = Albums; 
        
    }
    
    angular
        .module('grabbing-clouds')
        .controller('ReleasesCtrl', ['Fixtures', 'Albums', ReleasesCtrl]);
})();