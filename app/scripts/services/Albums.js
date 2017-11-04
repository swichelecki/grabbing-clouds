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
        
        Albums.addAlbum = function(albumCover, band, title, both, url, buy, info, bottom, iframe, songOne, songTwo, songThree, songFour, songFive, songSix, songSeven, songEight, songNine, songTen, songEleven, songTwelve, songThirteen, songFourteen, songFifteen, songSixteen, songSeventeen, songEighteen, songNineteen, songTwenty) {        
            
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
            image: albumCover,
            band: band,
            title: title,
            both: both,
            url: url,
            buy: buy,
            songs: arraySongs,
            info: info,
            bottom: bottom,
            bandcamp: iframe
        });  
            
        };
        
        /*
         * @desc prompts confirm box before sending album object to Albums.deleteAlbum
         */
        
        Albums.deleteConfirm = function(album) {
            if (confirm("Are you sure you want to delete this?") == true) {
                Albums.deleteAlbum(album); 
            }
        };
        
        /*
         * @desc deletes album object from album array 
         */
        
        Albums.deleteAlbum = function(album) {
            
            albums.$remove(album);
        };
        
        /*
         * @desc uses url from param to return album data to AlbumCtl
         */
        
        Albums.sentIndex = function(albumUrl) {
            
            for (var i = 0; i < albums.length; i++ ) {
                
                var selectedAlbum = albums[i].url;
                
                if (selectedAlbum == albumUrl){
                    
                    return albums[i];
                    break;
                }      
            }   
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
                }   
            
                return twoAlbums;
        };   
        
          
        return Albums;
    }
    
    angular
        .module('grabbing-clouds')
        .factory('Albums', ['$firebaseArray', Albums]);
})();