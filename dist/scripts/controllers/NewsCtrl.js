(function() {
    function NewsCtrl($anchorScroll, $location, News, $scope) {
        
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
        .controller('NewsCtrl', ['$anchorScroll', '$location', 'News', '$scope', NewsCtrl]);
})();