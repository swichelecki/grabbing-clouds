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
            both: 'Band name - Album title',
            songs: ['Song one', 'Song two', 'Song three', 'Song four', 'Song five', 'Song six', 'Song seven', 'Song eight', 'Song nine', 'Song ten'],
            info: 'Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Tellus urna congue curabitur a, ut vel justo donec maecenas commodo hendrerit, faucibus massa accumsan, nec in ut eleifend.',
            bottom: '/assets/images/album_bottom/example_bottom.jpg'
            },
            {
            index: 1,
            image: 'https://dummyimage.com/450x450/000/fff&text=450x450',
            band: 'Band name',
            title: 'Album title',
            both: 'Band name - Album title',
            songs: ['Song one', 'Song two', 'Song three', 'Song four', 'Song five', 'Song six', 'Song seven', 'Song eight', 'Song nine', 'Song ten'],
            info: 'Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Tellus urna congue curabitur a, ut vel justo donec maecenas commodo hendrerit, faucibus massa accumsan, nec in ut eleifend.',    
            bottom: '/assets/images/album_bottom/example_bottom.jpg'
            },
            {
            index: 2,
            image: 'https://dummyimage.com/450x450/000/fff&text=450x450',
            band: 'Band name',
            title: 'Album title',
            both: 'Band name - Album title',
            songs: ['Song one', 'Song two', 'Song three', 'Song four', 'Song five', 'Song six', 'Song seven', 'Song eight', 'Song nine', 'Song ten'],
            info: 'Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Tellus urna congue curabitur a, ut vel justo donec maecenas commodo hendrerit, faucibus massa accumsan, nec in ut eleifend.',    
            bottom: '/assets/images/album_bottom/example_bottom.jpg'
            },
            {
            index: 3,
            image: 'https://dummyimage.com/450x450/000/fff&text=450x450',
            band: 'Band name',
            title: 'Album title',
            both: 'Band name - Album title',
            songs: ['Song one', 'Song two', 'Song three', 'Song four', 'Song five', 'Song six', 'Song seven', 'Song eight', 'Song nine', 'Song ten'],
            info: 'Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Tellus urna congue curabitur a, ut vel justo donec maecenas commodo hendrerit, faucibus massa accumsan, nec in ut eleifend.',
            bottom: '/assets/images/album_bottom/example_bottom.jpg'
            },
            {
            index: 4,
            image: '/assets/images/albums/grab44.jpg',
            band: 'Acid Owl',
            title: 'Life Education',
            both: 'Acid Owl - Life Education',
            songs: ['Acid Owl Meets Eagle Wizard', 'Life Education Guru', 'Beyond the Owl Dimension', 'Rainbow Terminus', 'Cognitive Claw', 'Journey to the Earth Womb', 'The Night Hunt'],
            info: 'Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Tellus urna congue curabitur a, ut vel justo donec maecenas commodo hendrerit, faucibus massa accumsan, nec in ut eleifend.',    
            bottom: '/assets/images/album_bottom/bottom_acidaowl.jpg'
            },
            {
            index: 5,
            image: '/assets/images/albums/badbad_strangeland.jpg',
            band: 'The Strange Land / bAd bAd',
            title: 'Split 7"',
            both: 'The Strange Land / bAd bAd - Split 7"',
            songs: ['The Strange Land - Real', 'The Strange Land - Seer', 'bAd bAd - pickitapart', 'bAd bAd - hot lAvA'],
            info: 'Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Tellus urna congue curabitur a, ut vel justo donec maecenas commodo hendrerit, faucibus massa accumsan, nec in ut eleifend.',
            bottom: '/assets/images/album_bottom/bottom_strangeland_badbad.jpg'
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
                    //console.log('albums[i]', albums[i]);
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
        
        /*
        *@desc uses index from param to return album data
        */
        
        Fixtures.sentIndex = function(albumIndex) {
            
            var albumObject = null;
            
            albumObject = dataArray[albumIndex];
            
            return albumObject;
        };
        
        /*
         * @desc array of objects containing news data
         */
        
        var newsArray = [
            {
            index: 0,    
            date: '3/15/17',
            headline: 'Headline Lorem ipsum',    
            copy: 'Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil.',
            image: '/assets/images/news_default.jpg'
            },
            {
            index: 1,
            date: '3/16/17',
            headline: 'Headline Lorem ipsum',      
            copy: 'Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil.',
            image: '/assets/images/news_default.jpg'
            },
            {
            index: 2,
            date: '3/17/17',
            headline: 'Headline Lorem ipsum',      
            copy: 'Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil.',
            image: '/assets/images/news_default.jpg'
            }
        ];
        
        /*
         * @desc puts news array in object and returns to controller
         */
        
        Fixtures.returnNewsArray = function(numLoops) {
            
            var newsData = null;
            
            for (var i = 0; i < numLoops; i++) {
                newsData = newsArray;
            }
            
            return newsData;
        };
        
        return Fixtures;
    }
    
    angular
        .module('grabbing-clouds')
        .factory('Fixtures', [Fixtures]);
})();