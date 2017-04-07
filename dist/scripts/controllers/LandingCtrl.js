(function() {
    function LandingCtrl($anchorScroll, $location, Fixtures) {
        
        /*
        * @desc home page Bootstrap billboard
        */
        
        this.myInterval = 5000;
        this.active = 0;
        
        var slides = this.slides = [];
        var currIndex = 0;
        
        this.addSlide = function() {
            slides.push({
                image: '/assets/images/carousel/billboard_1.jpg',
                title: 'Lorem ipsum dolor sit',
                text: 'Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi',
                id: currIndex++,
                url: 'contact'
            },{
                image: '/assets/images/carousel/billboard_2.jpg',
                title: 'Shawnthony Calypso out now',
                text: "Some gnarly wax coming your way from some of SF's sickest new bands, The Strange Land and bAd bAd. First 100 on a milky clear/bone vinyl",
                id: currIndex++,
                url: 'contact'  
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
        
        this.albums = Fixtures.returnArrayHomepage();
        
       // console.log(this.albums); 
        
    }
    
    angular
        .module('grabbing-clouds')
        .controller('LandingCtrl', ['$anchorScroll', '$location', 'Fixtures', LandingCtrl]);
})();