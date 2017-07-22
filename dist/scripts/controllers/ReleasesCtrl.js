(function() {
    function ReleasesCtrl(Albums, $anchorScroll, $location) {
        
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
        * @desc brings album object data to template from firebase
        */
       
         this.albums = Albums; 
        
       /*
        * desc makes body-height class taller for iPads
        */
        
        var bodyHeight = angular.element(document.getElementsByClassName('body-background'));    
        
        var ipadHeight = function() {
            bodyHeight[0].style.minHeight = '958px';
        };
        
        var ipadProHeight = function() {
            bodyHeight[0].style.minHeight = '1210px';
        };
        
         if (window.innerHeight > 950 && window.innerHeight < 1100) {
            ipadHeight();
        } else if (window.innerHeight > 1100) {
            ipadProHeight();
        }
        
       /*
        * desc makes side widget stay on screen on input click and not on ngBlur  
        */
        
        var side_widget_scroll_position = 0;
        
        var display = false;
        
        var displayTrue = function() {
            display = true;
        };
        
        this.displayFalse = function() {
            display = false;
            
           /*  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
                
                    console.log("call displayFalse() in Firebase");
                    side_widget_scroll_position = window.scrollY;
                 if (side_widget_scroll_position <= 200) {
                    hide();
                 }
            
             } else { */
                 
                if (document.documentElement.scrollTop || document.body.scrollTop <= scrollDistance) {
                    hide();
             //end else   }
          
            }
        };
    
        var smallInput = document.getElementById('small-input');
        
       /*
        * desc makes side widget appear and disappear on scroll
        */
        
        var toTopId = angular.element(document.getElementById('to-top'));
        var toTopWidget = document.getElementsByClassName('to-top-container')[0];
        var scrollDistance = toTopWidget.getBoundingClientRect().top + 200;
       
        var show = function() {
            
            toTopId.css({'display' : 'block'});
            
        };
        
        var hide = function() {
            toTopId.css({'display' : 'none'});
        };
        
       /*
        * desc side widget event listeners found here
        */
        
        this.onload = function() {
            
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            
            console.log("FireFox browser on releases page"); 
                
          /*  window.addEventListener('scroll', function(event) {
            side_widget_scroll_position = window.scrollY;
            
                if (side_widget_scroll_position >= 200) {
                   //window.requestAnimationFrame(function() {
                        show(); 
                   // });
                } else if (side_widget_scroll_position <= 200 && display == false) {
                   // window.requestAnimationFrame(function() {
                        hide(); 
                    //});
                }
            }); 
                  
            smallInput.addEventListener('click', function(event) {
                    displayTrue();
            }); */
            
            } else { 
            
            window.addEventListener('scroll', function(event) {
                
                if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
                    show();
                } else if (document.documentElement.scrollTop || document.body.scrollTop <= scrollDistance && display == false) {
                    hide();
               
             } 
                
            });
            
            smallInput.addEventListener('click', function(event) {
                displayTrue();
            });
            
           }
            
        }; 
    }
    
    angular
        .module('grabbing-clouds')
        .controller('ReleasesCtrl', ['Albums', '$anchorScroll', '$location', ReleasesCtrl]);
})();