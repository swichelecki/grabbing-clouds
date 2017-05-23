(function(){
    function Carousel($firebaseArray) {
        
        var Carousel = {};
        
        /*
         * @desc stores call to firebase data base storing 'carousel' object and its child objects
         */
        
        var ref = firebase.database().ref().child('carousel');
        
        /*
         * @desc puts returned object data into an array 
         */
        
        var carousel = $firebaseArray(ref);
        
        /*
         * @desc allows object data in firebase to be disseminated throughout site
         */
        
        Carousel.carousel = carousel;
        
        /*
         * @desc sends object data to firebase
         */
        
        Carousel.addCarousel = function(carTitle, carText, carImage, carIndex) {
        
        /*NOTE: id refers to each carousel object's index in the array
                index refers to the album index used to generate url
         */
            
        var id = carousel.length -1;
            
        var newId = id +1;
            
        carousel.$add({
                image: carImage,
                title: carTitle,
                text: carText,
                id: newId,
                index: carIndex,
            });    
            
        /*carousel.$add({
                image: '/assets/images/photo-name.jpg',
                title: 'Shawnthony Calypso out now',
                text: 'Blue tapes. A dog in a pile of hay. AND a praying mantis. This record has to rule.',
                id: 1,
                index: 4,
                url: 'album/$stateParams.data' 
            });*/
            
        };
        
        /*
         * @desc prompts confirm box before sending album object to Carousel.deleteCarousel
         */
        
        Carousel.deleteConfirm = function(carousels) {
            if (confirm("Are you sure you want to delete this?") == true) {
                Carousel.deleteCarousel(carousels); 
            }
        };
        
        /*
         * @desc deletes carousel object from carousel array 
         */
        
        Carousel.deleteCarousel = function(carousels) {
            
            carousel.$remove(carousels);
            
        };
        
        return Carousel;  
    }
    
    angular
        .module('grabbing-clouds')
        .factory('Carousel', ['$firebaseArray', Carousel]);
    
})();