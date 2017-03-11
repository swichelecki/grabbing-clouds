(function() {
    function Fixtures() {
        
        var Fixtures = {};
        
       /*
        * @desc array of objects containing album data
        */
        
        var dataArray = [
            {
            index: 0,
            image: 'https://dummyimage.com/450x450/000/fff&text=450x450',
            band: 'Band name',
            title: 'Album title',
            both: 'Band name - Album title'
            },
            {
            index: 1,
            image: 'https://dummyimage.com/450x450/000/fff&text=450x450',
            band: 'Band name',
            title: 'Album title',
            both: 'Band name - Album title'
            },
            {
            index: 2,
            image: 'https://dummyimage.com/450x450/000/fff&text=450x450',
            band: 'Band name',
            title: 'Album title',
            both: 'Band name - Album title'
            },
            {
            index: 3,
            image: 'https://dummyimage.com/450x450/000/fff&text=450x450',
            band: 'Band name',
            title: 'Album title',
            both: 'Band name - Album title'
            },
            {
            index: 4,
            image: 'https://dummyimage.com/450x450/000/fff&text=450x450',
            band: 'Band name',
            title: 'Album title',
            both: 'Band name - Album title'
            },
            {
            index: 5,
            image: 'https://dummyimage.com/450x450/000/fff&text=450x450',
            band: 'Band name',
            title: 'Album title',
            both: 'Band name - Album title'
            }
        ];
        
    
        /*
         * @desc puts data array in object and sends last two album indexes to homeAlbums();
         */
        
        Fixtures.returnArrayHomepage = function() {
            
            var homeAlbums = null;
            
            for (var i = 0; i < 1; i++) {
                homeAlbums = dataArray;
            }   
            
            var penultimateIndex = homeAlbums.length -2;
            
            var lastIndex = homeAlbums.length -1;
            
            var pen = homeAlbums[penultimateIndex];
                       
            var last = homeAlbums[lastIndex];
            
            if (twoAlbums = []) {
            
            var lastReturn = Fixtures.homeAlbums(pen, last);
            
            }
            
            return lastReturn;
            
        };
        
        /*
         * @desc global object in which homeAlbums(); stores last two album indexes
         */
            
        var twoAlbums = [];  
        
        /*
         * @desc puts last two album indexes into an array and returns to returnArrayHomepage();
         */
            
        Fixtures.homeAlbums = function(last, pen) {
                
                var albums = [last, pen];
                
                for (var i = 0; i < albums.length; i++) {
                    
                    twoAlbums.push(albums[i]);
                    console.log('albums[i]', albums[i]);
                }   
            
                return twoAlbums;
        };   
        
        /*
         * @desc puts data array in object and returns to controller
         */
        
        Fixtures.returnDataArray = function(numLoops) {
            
            var uniqueAlbums = null;
            
            for (var i = 0; i < numLoops; i++) {
                uniqueAlbums = dataArray;
            }
            
            return uniqueAlbums;
        };
        
        return Fixtures;
    }
    
    angular
        .module('grabbing-clouds')
        .factory('Fixtures', [Fixtures]);
})();