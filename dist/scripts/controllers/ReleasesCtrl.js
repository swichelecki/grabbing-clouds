(function() {
    function ReleasesCtrl(Fixtures) {
        
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
        
        this.albums = Fixtures.returnDataArray(1);
        
       // console.log(this.albums);
        
    }
    
    angular
        .module('grabbing-clouds')
        .controller('ReleasesCtrl', ['Fixtures', ReleasesCtrl]);
})();