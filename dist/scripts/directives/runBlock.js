(function() {
    function runBlock() {
    
    /*
     * @desc this run block enables the collapsable nav
     */
    var nav = document.getElementsByClassName('nav'); 
    var logo = document.getElementsByClassName('large-logo');
    var smallLogo = document.getElementsByClassName('small-logo');    
    var releases = document.getElementsByClassName('releases-li');
    var news = document.getElementsByClassName('news-li');
    var shop = document.getElementsByClassName('shop-li');
    var contact = document.getElementsByClassName('contact-li');
    var navContainer = document.getElementsByClassName('nav-container');
    var ul = document.getElementsByClassName('ul');     
    var carousel = document.getElementsByClassName('carousel');   
    var instagram = document.getElementsByClassName('ion-social-instagram-outline');    
    var twitter = document.getElementsByClassName('ion-social-twitter');
    var facebook = document.getElementsByClassName('ion-social-facebook');
    
    var collapsedNav = function() {
        nav[0].style.position = 'fixed';
        nav[0].style.top = 0;
        nav[0].style.left = 0;
        nav[0].style.zIndex = 3;
        navContainer[0].style.paddingRight = '38.5%';
        releases[0].style.fontSize = '16px';
        news[0].style.fontSize = '16px';
        shop[0].style.fontSize = '16px';
        contact[0].style.fontSize = '16px'; 
        releases[0].style.width = '5.5rem';
        news[0].style.width = '5rem';
        shop[0].style.width = '5rem';
        contact[0].style.width = '5rem'; 
        logo[0].style.display = 'none'; 
        smallLogo[0].style.float = 'left';
        smallLogo[0].style.display = 'inline-block';
        navContainer[0].style.paddingLeft = 0;
        navContainer[0].style.paddingTop = '.2rem';
        navContainer[0].style.height = '66px';
        ul[0].style.float = 'left';
        ul[1].style.float = 'right';
        ul[0].style.paddingBottom = 0;
        ul[1].style.paddingBottom = 0;
        ul[0].style.paddingTop = '1.5rem';
        ul[1].style.paddingTop = '1.5rem';
        carousel[0].style.marginTop = '165px';
        instagram[0].style.display = 'inline-block';
        twitter[0].style.display = 'inline-block';
        facebook[0].style.display = 'inline-block';
        instagram[0].style.paddingTop = '1rem';
        twitter[0].style.paddingTop = '1rem';
        facebook[0].style.paddingTop = '1rem';
    };   
        
    var fullNav = function() {
       nav[0].style.position = 'relative';
       nav[0].style.top = null;
       nav[0].style.left = null;
       nav[0].style.zIndex = null;
       navContainer[0].style.paddingRight = null;    
       logo[0].style.display = 'inline-block'; 
       smallLogo[0].style.display = 'none';  
       releases[0].style.display = 'inline-block';
       news[0].style.display = 'inline-block';
       shop[0].style.display = 'inline-block';
       contact[0].style.display = 'inline-block';
       contact[0].style.fontSize = '16px'; 
       releases[0].style.paddingRight = '3rem';
       news[0].style.paddingRight = '3rem';
       shop[0].style.paddingRight = '3rem';
       contact[0].style.paddingRight = '3rem'; 
       navContainer[0].style.paddingLeft = '8%';
       navContainer[0].style.paddingTop = '.5rem';
       navContainer[0].style.height = '165px';    
       ul[0].style.float = null;
       ul[1].style.float = null;
       ul[0].style.display = 'inline-block'; 
       ul[1].style.display = 'inline-block';     
       ul[0].style.paddingBottom = '3.5rem';
       ul[1].style.paddingBottom = '3.5rem';
       ul[0].style.paddingTop = null;
       ul[1].style.paddingTop = null;
       releases[0].style.fontSize = '21px';
       news[0].style.fontSize = '21px';
       shop[0].style.fontSize = '21px';
       contact[0].style.fontSize = null; 
       releases[0].style.width = null;
       news[0].style.width = null;
       shop[0].style.width = null;
       contact[0].style.width = null;    
       carousel[0].style.marginTop = null;
       instagram[0].style.display = 'none';
       twitter[0].style.display = 'none';
       facebook[0].style.display = 'none';
    };    
        
    window.onload = function() {
        var nav = document.getElementsByClassName('nav')[0];
        var scrollDistance = nav.getBoundingClientRect().bottom - 66;
        var scrollDistanceTop = nav.getBoundingClientRect().top + 99;
        
        window.addEventListener('scroll', function(event) {
            
            if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
                collapsedNav();
            } else if  (document.documentElement.scrollTop || document.body.scrollTop <= scrollDistanceTop) {
                fullNav();
            }
            
        });
    
    }; 
        
    }
    
    angular
        .module('grabbing-clouds')
        .run([runBlock]);
})();