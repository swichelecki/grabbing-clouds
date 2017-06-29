(function() {
    function runBlock($anchorScroll, $location) {
    
   /*
    * @desc this function enables mobile side nav toggle    
    */
        
    $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    }); 
                
    /*
     * @desc DOM node objects used to enable the collapsable / responsive nav
     */
    
    var nav = document.getElementsByClassName('nav');
    var navLogo = document.getElementsByClassName('nav-logo');    
    var logo = document.getElementsByClassName('large-logo');
    var smallLogo = document.getElementsByClassName('small-logo');    
    var releases = document.getElementsByClassName('releases-li');
    var news = document.getElementsByClassName('news-li');
    var shop = document.getElementsByClassName('shop-li');
    var contact = document.getElementsByClassName('contact-li');
    var navContainer = document.getElementsByClassName('nav-container');
    var ul = document.getElementsByClassName('ul');     
    var marginspacer = document.getElementsByClassName('nav-margin-spacer');   
    var instagram = document.getElementsByClassName('ion-social-instagram');    
    var twitter = document.getElementsByClassName('ion-social-twitter');
    var facebook = document.getElementsByClassName('ion-social-facebook');
    var burger = document.getElementsByClassName('ion-navicon-round');
      
    /*
     * @desc DOM node objects used to enable nav $anchorScroll
     */    
        
    var newsTop = document.getElementById('news-top');
    var releasesTop = document.getElementById('releases-top');
    var contactTop = document.getElementById('contact-top');
    var homeTop = document.getElementById('home-top');
    
    /*
     * @desc functions used to enable the collapsable / responsive nav
     */
        
    var collapsedNav = function() {
        nav[0].style.position = 'fixed';
        nav[0].style.top = 0;
        nav[0].style.left = 0;
        nav[0].style.zIndex = 3;
        navContainer[0].style.paddingRight = '10%';
        navContainer[0].style.textAlign = null;
        releases[0].style.fontSize = '18px';
        news[0].style.fontSize = '18px';
        shop[0].style.fontSize = '18px';
        contact[0].style.fontSize = '18px'; 
        releases[0].style.width = '5.1rem';
        news[0].style.width = '6rem';
        shop[0].style.width = '6rem';
        contact[0].style.width = '5rem';
        logo[0].style.display = 'none'; 
        navLogo[0].style.display = 'none'; 
        smallLogo[0].style.display = 'inline-block';
        navContainer[0].style.paddingLeft = 0;
        navContainer[0].style.paddingTop = '.2rem';
        navContainer[0].style.height = '66px';
        ul[0].style.width = '230px';
        ul[1].style.width = '230px';
        ul[0].style.float = 'left';
        ul[1].style.float = 'left';
        ul[0].style.paddingBottom = '0rem';
        ul[1].style.paddingBottom = '0rem';
        ul[0].style.paddingTop = '1.2rem';
        ul[1].style.paddingTop = '1.2rem';
        ul[0].style.display = 'inline-block'; 
        ul[1].style.display = 'inline-block'; 
        marginspacer[0].style.marginTop = '165px';
        marginspacer[0].style.height = null;
        instagram[0].style.display = 'inline-block';
        twitter[0].style.display = 'inline-block';
        facebook[0].style.display = 'inline-block';
        burger[0].style.display = null; 
        instagram[0].style.paddingTop = '.7rem';
        twitter[0].style.paddingTop = '.7rem';
        facebook[0].style.paddingTop = '.7rem';
    };   
        
    var fullNav = function() {
       nav[0].style.position = 'relative';
       nav[0].style.top = null;
       nav[0].style.left = null;
       nav[0].style.zIndex = null;
       navContainer[0].style.paddingRight = null;  
       navContainer[0].style.textAlign = 'center';
       navContainer[0].style.paddingTop = '.5rem';
       navContainer[0].style.position = 'relative'; 
       navLogo[0].style.display = 'inline-block';
       navLogo[0].style.margin = 0;    
       logo[0].style.display = 'block';  
       smallLogo[0].style.display = 'none';  
       releases[0].style.display = 'inline-block';
       news[0].style.display = 'inline-block';
       shop[0].style.display = 'inline-block';
       contact[0].style.display = 'inline-block';    
       releases[0].style.paddingRight = '3rem';
       news[0].style.paddingRight = '3rem';
       shop[0].style.paddingRight = '3rem';
       contact[0].style.paddingRight = '3rem'; 
       navContainer[0].style.paddingTop = '.5rem';
       navContainer[0].style.height = '165px'; 
       ul[0].style.width = '332px';
       ul[1].style.width = '332px';
       ul[0].style.float = null;
       ul[1].style.float = null;
       ul[0].style.display = 'inline-block'; 
       ul[1].style.display = 'inline-block';     
       ul[0].style.paddingBottom = '3.5rem';
       ul[1].style.paddingBottom = '3.5rem';
       ul[0].style.paddingTop = '3.5rem';
       ul[1].style.paddingTop = '3.5rem';
       releases[0].style.fontSize = '24px';
       news[0].style.fontSize = '24px';
       shop[0].style.fontSize = '24px';
       contact[0].style.fontSize = '24px'; 
       releases[0].style.width = null;
       news[0].style.width = null;
       shop[0].style.width = null;
       contact[0].style.width = null;    
       marginspacer[0].style.marginTop = '0px';
       marginspacer[0].style.height = null;  
       instagram[0].style.display = 'none';
       twitter[0].style.display = 'none';
       facebook[0].style.display = 'none';
       burger[0].style.display = null; 
    }; 
        
    /*
     * @desc function used to enable nav $anchorScroll
     */
        
    var gotoTop = function() {
        
            $location.hash("top");
            
            $anchorScroll();
            
            $location.hash(null);
        };
        
    
    /*
     * @desc if/else conditional used to enable collapsable nav
     * if = FireFox / else = all other browsers 
     */    
        
    window.onload = function() {
        
         if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
            
            console.log("FireFox browser"); 
       
          /*  var last_known_scroll_position = 0;
             
            var client_width = 0;
             
            window.addEventListener('scroll', function(event) {
                last_known_scroll_position = window.scrollY;
                client_width = window.scrollX;
            
                if (last_known_scroll_position >= 99) {
                        collapsedNav();
                } else if (last_known_scroll_position <= 99) {
                        fullNav();
                } else if (last_known_scroll_position >= 99 && client_width <= 990) {
                        collapsedNav();
                }
            });
             
            body.css({'background-color' : '#ff33ff'});
            body.css({'z-index' : -100}); */
             
         } else { 
             
            var nav = document.getElementsByClassName('nav')[0];
            var scrollDistance = nav.getBoundingClientRect().bottom - 66; 
            var scrollDistanceVeryTop = nav.getBoundingClientRect().top; 
        
            window.addEventListener('scroll', function(event) {
            
            if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistanceVeryTop && document.documentElement.clientWidth <= 990) {
                console.log('resonsive width css; collapsedNav() and fullNav() prevented from firing');
            } else if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
                console.log('collapsedNav called in scroll event listener');
                collapsedNav();
            } else if (document.documentElement.scrollTop || document.body.scrollTop <= scrollDistance) {
                fullNav();
                console.log('fullNav called in scroll event listener');
            } 
                
            });
             
        }
        
       /*
        * @desc event listener used to enable $anchorScroll
        */
        
        newsTop.addEventListener('click', function(event) {
            gotoTop();
        }); 
        
        releasesTop.addEventListener('click', function(event) {
            gotoTop(); 
        });
        
        contactTop.addEventListener('click', function(event) {
            gotoTop(); 
        });
        
        homeTop.addEventListener('click', function(event) {
            gotoTop(); 
        });
    }; 
  
}
    
    angular
        .module('grabbing-clouds')
        .run(['$anchorScroll', '$location', runBlock]);
})();