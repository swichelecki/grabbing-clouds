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
        
        Carousel.addCarousel = function(carTitle, carText, carImage, carIndex, carUrl) {
        
        //NOTE: id refers to each carousel object's index in the array
            
        var id = carousel.length -1;
            
        var newId = id +1;
            
        carousel.$add({
                image: carImage,
                title: carTitle,
                text: carText,
                id: newId,
                index: carIndex,
                url: carUrl
            });    
            
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