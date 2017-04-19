(function() {
    function News($firebaseArray) {
        
        var News = {};
        
        /*
        * @desc stores call to firebase data base storing 'news' object and its child objects
        */
        
        var ref = firebase.database().ref().child('news');
        
        /*
        * @desc puts returned object data into an array 
        */
        
        var news = $firebaseArray(ref);
        
        /*
        * @desc allows object data in firebase to be disseminated throughout site
        */
        
        News.news = news;
        
        /*
        * @desc sends object data to firebase. ATTN: Use function call to send new object
        */
        
        News.sendReturnNews = function() {
        
        var d = new Date();
        var time = d.getTime();
            
        news.$add({
            index: 4,    
            date: time,
            headline: 'Headline Lorem ipsum',    
            copy: 'Index 4. Top. Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Lorem ipsum dolor sit amet, tristique nec sed sed enim wisi placerat, quis lorem diam vel, turpis at luctus. Eget non. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil. Volutpat etiam rutrum nec diam et. Justo parturient, cupiditate quis, habitasse feugiat metus non nihil.',
            image: '/assets/images/news_default.jpg'
            });
            
        };
        
      //  News.sendReturnNews();
        
        return News;
    }
    
    angular
        .module('grabbing-clouds')
        .factory('News', ['$firebaseArray', News]);
})();