(function() {
    function ContactCtrl() {
        
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
        
    }
    
    angular
        .module('grabbing-clouds')
        .controller('ContactCtrl', [ContactCtrl]);
})();