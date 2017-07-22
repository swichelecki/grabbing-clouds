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
        * @desc sends object data to firebase.
        */
        
        News.sendReturnNews = function(headline, copy, newsImage) {
            
        var d = new Date();
        var time = d.getTime();
            
        var index = news.length -1;
            
        var newIndex = index +1;
            
        if (newsImage == undefined || '/assets/images/news/...Leave blank for default image') {
            
            newsImage = '/assets/images/news/news_default.jpg';
        }
            
        news.$add({
            index: newIndex,
            date: time,
            headline: headline,
            copy: copy,
            image: newsImage
        });
            
        }; 
        
        /*
         * @desc prompts confirm box before sending news object to News.deleteNews
         */
        
        News.deleteConfirm = function(newsItem) {
            if (confirm("Are you sure you want to delete this?") == true) {
                News.deleteNews(newsItem); 
            }
        };
        
        /*
         * @desc deletes news object from news array
         */
        
        News.deleteNews = function(newsItem) {        
        
            news.$remove(newsItem);
        
        };
        
        return News;
    }
    
    angular
        .module('grabbing-clouds')
        .factory('News', ['$firebaseArray', News]);
})();