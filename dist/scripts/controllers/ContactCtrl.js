(function() {
    function ContactCtrl($location, $anchorScroll) {
        
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
        * desc makes body-height class taller for iPads
        */
        
        var bodyHeight = angular.element(document.getElementsByClassName('body-background'));    
        
        var ipadHeight = function() {
            bodyHeight[0].style.minHeight = '958px';
        };
        
        var ipadProHeight = function() {
            bodyHeight[0].style.minHeight = '1210px';
        };
        
         if (window.innerHeight > 950 && window.innerHeight < 1100) {
            ipadHeight();
        } else if (window.innerHeight > 1100) {
            ipadProHeight();
        }
            
    }
    
    angular
        .module('grabbing-clouds')
        .controller('ContactCtrl', ['$location', '$anchorScroll', ContactCtrl]);
})();
