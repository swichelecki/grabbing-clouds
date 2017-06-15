(function() {
    function AlbumCtrl(Fixtures, $stateParams, $anchorScroll, $location, $state, Albums) {
        
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
        
        console.log('albumIndex in AlbumCtrl', albumIndex);
    
        /*
        *@desc uses index from param to access data from fixtures.js
        */
        
       // this.album = Fixtures.sentIndex(albumIndex); 
        
        /*
        *@desc uses index from url parameter to access data from firebase
        */
        
        this.album = Albums.sentIndex(albumIndex);
              
        console.log('in CTL object returned to template', this.album);
        
        /*
        *@desc the three lines below bring the bandcamp iframe url from database to html
        */
        
        var url = Albums.sentIndex(albumIndex);
        
        var bandurl = url.bandcamp;
        
        document.getElementById("bandcamp").src = bandurl;
        
    }
    
    angular
        .module('grabbing-clouds')
        .controller('AlbumCtrl', ['Fixtures', '$stateParams', '$anchorScroll', '$location', '$state', 'Albums', AlbumCtrl]);
})();