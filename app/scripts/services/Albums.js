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
         * @desc sends object data to firebase.
         */
        
        Albums.addAlbum = function(image, band, title, both, listen, buy, info, bottom, songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven, songTwelve, songThirteen, songFourteen, songFifteen, songSixteen, songSeventeen, songEighteen, songNineteen, songTwenty) {
            
        var albumIndex = albums.length - 1;  
            
        var albumNewIndex = albumIndex + 1;   
            
        var arraySongs = [];
            
        if (songTwenty !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven, songTwelve, songThirteen, songFourteen, songFifteen, songSixteen, songSeventeen, songEighteen, songNineteen, songTwenty); 
            
        } else if (songNineteen !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven, songTwelve, songThirteen, songFourteen, songFifteen, songSixteen, songSeventeen, songEighteen, songNineteen); 
            
        } else if (songEighteen !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven, songTwelve, songThirteen, songFourteen, songFifteen, songSixteen, songSeventeen, songEighteen); 
       
        } else if (songSeventeen !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven, songTwelve, songThirteen, songFourteen, songFifteen, songSixteen, songSeventeen); 
            
        } else if (songSixteen !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven, songTwelve, songThirteen, songFourteen, songFifteen, songSixteen); 
        
        } else if (songFifteen !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven, songTwelve, songThirteen, songFourteen, songFifteen); 
            
        } else if (songFourteen !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven, songTwelve, songThirteen, songFourteen); 
            
        } else if (songThirteen !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven, songTwelve, songThirteen); 
            
        } else if (songTwelve !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven, songTwelve); 
            
        } else if (songEleven !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven); 
            
        } else if (songTen !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen); 
        
        } else if (songNine !== undefined) {
            
             arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine); 
       
        } else if (songEight !== undefined) {
            
             arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight); 
            
        } else if (songSeven !== undefined) {
            
             arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix, songSeven); 
            
        } else if (songSix !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive, songSix); 
            
        } else if (songFive !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour, songFive); 
       
        } else if (songFour !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree, songFour); 
            
        } else if (songThree !== undefined) {
            
            arraySongs.push(songOne, songTwo, songThree); 
      
        } else if (songTwo !== undefined) {
            
           arraySongs.push(songOne, songTwo); 
       
        } else if (songOne !== undefined) {
            arraySongs.push(songOne);
        }
                           
        albums.$add({
            index: albumNewIndex,
            image: image,
            band: band,
            title: title,
            both: both,
            listen: listen,
            buy: buy,
            songs: arraySongs,
            info: info,
            bottom: bottom
        });    
            
        /*albums.$add({
            index: 4,
            image: 'https://firebasestorage.googleapis.com/v0/b/grabbing-clouds.appspot.com/o/grab43.jpg?alt=media&token=f5a2d33e-3daa-475c-a1b9-542ed9ac8555',
            band: 'Shawnthony Calypso',
            title: 'A Whale of a Tale',
            both: 'Shawnthony Calypso - A Whale of a Tale',
            listen: 'https://bandcamp.com/',
            buy: 'https://bandcamp.com/',       
            songs: ['All Alone', 'Behind the Tree', 'Front Porch Chair', "Just Couldn't get it right", "Don't Blame All of the Good Times", "Devil's Rock (pt. 1)", 'Jesus was a Big Handsaw', 'Thanks for the Memories', 'Ceramic Hammock', 'A Couple of Bottles', 'When will It End', "Don't Hang Your Head in Shame", 'I Want to Leave', 'Spin Around', 'Hourglass', 'End of Another Day'],
            info: 'This is index 4. Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Tellus urna congue curabitur a, ut vel justo donec maecenas commodo hendrerit, faucibus massa accumsan, nec in ut eleifend.',    
            bottom: '/assets/images/album_bottom/bottom_acidaowl.jpg'
        });*/
            
        };
        
        /*
         * @desc deletes album object from album array 
         */
        
        Albums.deleteAlbum = function(album) {
            
            albums.$remove(album);
        };
        
        /*
         * @desc uses index from param to return album data to AlbumCtl
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