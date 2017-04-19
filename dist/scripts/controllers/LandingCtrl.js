(function() {
    function LandingCtrl($anchorScroll, Albums, Email, $stateParams, $location, $state) {
        
        /*
        * @desc home page Bootstrap billboard
        */
        
        this.myInterval = 7000;
        this.active = 0;
        
        var slides = this.slides = [];
        var currIndex = 0;
        
        this.addSlide = function() {
            slides.push({
                image: '/assets/images/carousel/billboard_1.jpg',
                title: 'The Memories - Live At Cloud Castle',
                text: "Get your hands on this stellar live recording from one of bubblegum's filthiest bands.",
                id: currIndex++,
                index: 3,
                url: 'album/$stateParams.data'
            },{
                image: '/assets/images/carousel/billboard_2.jpg',
                title: 'Shawnthony Calypso out now',
                text: 'Blue tapes. A dog in a pile of hay. AND a praying mantis. This record has to rule.',
                id: currIndex++,
                index: 4,
                url: 'album/$stateParams.data'  
            });
        };
        
        for (var i = 0; i < 1; i++) {
            this.addSlide();
        }
        
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
         * @desc sends last two album indexs to homepage html
         */
        
        //this.albums = Fixtures.returnArrayHomepage();
        
        /*
         * @desc calls for and returns last two album indexes to landing.html
         */
        
        this.albums = Albums.returnArrayHomepage();
        
        /*
         * @desc sends email address to Email service and adds to firebase
         */
        
        this.newEmail = Email;
        
    }
    
    angular
        .module('grabbing-clouds')
        .controller('LandingCtrl', ['$anchorScroll', 'Albums', 'Email', '$stateParams', '$location', '$state', LandingCtrl]);
})();