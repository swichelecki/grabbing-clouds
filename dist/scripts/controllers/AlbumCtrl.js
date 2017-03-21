(function() {
    function AlbumCtrl(Fixtures, $stateParams, $location, $state) {
        
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
        *@desc uses index from param to access data from fixtures.js
        */
        
        var albumIndex = $stateParams.data;
        
        /*
        *@desc uses index from param to access data from fixtures.js
        */
        
        this.album = Fixtures.sentIndex(albumIndex); 
        
    }
    
    angular
        .module('grabbing-clouds')
        .controller('AlbumCtrl', ['Fixtures', '$stateParams', '$location', '$state', AlbumCtrl]);
})();