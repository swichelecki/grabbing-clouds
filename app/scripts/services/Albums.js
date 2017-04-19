(function() {
    function Albums($firebaseArray) {
        
        var Albums = {};
        
        /*
        * @desc stores call to firebase data base storing 'albums' object and its child objects
        */
        
        var ref = firebase.database().ref().child('albums');
        
        /*
        * @desc puts returned object data into an array 
        */
        
        var albums = $firebaseArray(ref);
        
        /*
        * @desc allows object data in firebase to be disseminated throughout site
        */
        
        Albums.albums = albums;
        
        /*
        * @desc sends object data to firebase. ATTN: Use function call to send new object
        */
        
        Albums.addAlbum = function() {
            
        albums.$add({
            index: 3,
            image: '/assets/images/albums/memories_live.jpg',
            band: 'The Memories',
            title: 'Live at Cloud Castle',
            both: 'The Memories - Live at Cloud Castle',
            listen: 'https://bandcamp.com/',
            buy: 'https://bandcamp.com/',       
            songs: ['Acid Owl Meets Eagle Wizard', 'Life Education Guru', 'Beyond the Owl Dimension', 'Rainbow Terminus', 'Cognitive Claw', 'Journey to the Earth Womb', 'The Night Hunt'],
            info: 'This is index 3. Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Tellus urna congue curabitur a, ut vel justo donec maecenas commodo hendrerit, faucibus massa accumsan, nec in ut eleifend.',    
            bottom: '/assets/images/album_bottom/bottom_acidaowl.jpg'
        });
            
        };
        
       // Albums.addAlbum();
        
        /*
        *@desc uses index from param to return album data to AlbumCtl
        */
        
        Albums.sentIndex = function(albumIndex) {
            
                var albumObject = null;
            
                albumObject = albums[albumIndex];
            
                return albumObject;      
        }; 
        
        
        /*
         * @desc puts data array in object and sends last two album indexes to homeAlbums();
         */
        
        Albums.returnArrayHomepage = function() {
            
            var homeAlbums = null;
            
            for (var i = 0; i < 1; i++) {
                homeAlbums = albums;
            }   
            
            var penultimateIndex = homeAlbums.length -2;
            
            var lastIndex = homeAlbums.length -1;
            
            var pen = homeAlbums[penultimateIndex];
                       
            var last = homeAlbums[lastIndex];
            
            if (twoAlbums = []) /*probably need to remove if statement to add more*/ { 
            
            var lastReturn = Albums.homeAlbums(pen, last);
            
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
            
        Albums.homeAlbums = function(last, pen) {
                
                var albumsTwo = [last, pen];
                
                for (var i = 0; i < albumsTwo.length; i++) {
                    
                    twoAlbums.push(albumsTwo[i]);
                    //console.log('albums[i]', albums[i]);
                }   
            
                return twoAlbums;
        };   
        
          
        return Albums;
    }
    
    angular
        .module('grabbing-clouds')
        .factory('Albums', ['$firebaseArray', Albums]);
})();