(function() {
    function AdminCtrl(Albums, News, Carousel, $scope, $state) {
        
       /*
        * @desc array for FireBase news image
        */
        
        var newsImageArray = [];
        
       /*
        * @desc array for FireBase album cover upload
        */
        
        var newArray = [];
        
       /*
        * @desc array for FireBase album bottom photo upload
        */
        
        var bottomPhoto = [];
        
       /*
        * @desc array for FireBase carousel photo upload
        */
        
        var carouselPhoto = [];
        
       /*
        * @desc Firebase log in and log out 
        */
        
        $scope.logIn = function(email, pass) {
         
            const auth = firebase.auth();
            
            const promise = auth.signInWithEmailAndPassword(email, pass);
            promise.catch(e => console.log(e.message)).then(function() {
                
                $scope.addAlbum = { 'display' : 'block'};
                $scope.addNews = { 'display' : 'block' };
                $scope.addCarousel = { 'display' : 'block' };
                $state.reload();
            });
        };
        
        /*$scope.signUp = function(email, pass) {
            
            const auth = firebase.auth();
            
            const promise = auth.createUserWithEmailAndPassword(email, pass);
            
        };*/
        
        $scope.logOut = function() {
            
            firebase.auth().signOut().then(function() {
                
                $state.reload();
                
            });
        };
        
        firebase.auth().onAuthStateChanged(firebaseUser => {
           
            if(firebaseUser) {
                console.log(firebaseUser); 
                
            } else {
                console.log('not logged in');
                $scope.addAlbum = { 'display' : 'none'};
                $scope.addNews = { 'display' : 'none' };
                $scope.addCarousel = { 'display' : 'none' };
                    
            }
            
        });
        
       /*
        * @desc returns album data to template from Album service
        */
        
        this.albums = Albums;
        
       /*
        * @desc returns news data to template from News service
        */
        
        this.news = News;
                
       /*
        * @desc returns carousel data to template from Carousel service
        */
        
        this.carousel = Carousel;
        
       /*
        * @desc FireBase album photo upload
        */
               
        $scope.uploadFile = function(files) {
            
            var file = files[0];
                
            var storageRef = firebase.storage().ref('albums/' + file.name);
            
            storageRef.put(file).then(function() {
                
                storageRef.getDownloadURL().then(function(url) {  
                
                    newArray.push(url);
                    console.log('newArray 2', newArray);
                 
                    $scope.albumCover = newArray[0];
                    console.log('newArray 3', $scope.albumCover);

                });  
            
            });
            
        };
        
      /*
       * @desc FireBase album photo upload
       */   

       $scope.uploadBottom = function(files) {
        
           var file = files[0];
        
           var storageRef = firebase.storage().ref('bottom/' + file.name);
        
           storageRef.put(file).then(function() {
            
                storageRef.getDownloadURL().then(function(url) {
                
                bottomPhoto.push(url);
                
                $scope.bottom = bottomPhoto[0];
                    
                })
           });
       }; 
        
     /*
      * desc FireBase news image photo upload
      */
        
      $scope.uploadNewsImage = function(files) {
            
          var file = files[0];
            
          var storageRef = firebase.storage().ref('news/' + file.name);
            
          storageRef.put(file).then(function() {
                
              storageRef.getDownloadURL().then(function(url) {
                    
              newsImageArray.push(url);
                    
              $scope.newsImage = newsImageArray[0];
                    
              });
                
          });
      }; 
        
   /*
    * @desc Firebase carousel image photo upload
    */
        
    $scope.uploadCarouselImage = function(files) {
        
        var file = files[0];
        
        var storageRef = firebase.storage().ref('carousel/' + file.name);
        
        storageRef.put(file).then(function(url) {
            
            storageRef.getDownloadURL().then(function(url) {
            
            carouselPhoto.push(url); 
                
            $scope.carImage = carouselPhoto[0];    
                
            });
        });
    };
        
    }
    
    angular
        .module('grabbing-clouds')
        .controller('AdminCtrl', ['Albums', 'News', 'Carousel', '$scope', '$state', AdminCtrl]);
})();