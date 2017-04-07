(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
        .html5Mode({
            enabled: true,
            requireBase: false
        });
        
        $stateProvider
        .state('landing', {
            url: '/',
            controller: 'LandingCtrl as landing',
            templateUrl: '/templates/landing.html'
        }).state('news', {
            url: '/news',
            controller: 'NewsCtrl as news',
            templateUrl: '/templates/news.html'
        }).state('releases', {
            url: '/releases',
            controller: 'ReleasesCtrl as releases',
            templateUrl: '/templates/releases.html'
        }).state('contact', {
            url: '/contact',
            controller: 'ContactCtrl as contact',
            templateUrl: '/templates/contact.html'
        }).state('album', {
            url: '/album/:data',
            controller: 'AlbumCtrl as album',
            templateUrl: '/templates/album.html'
        });
    }
    
    angular
        .module('grabbing-clouds', ['ui.bootstrap', 'ngAnimate', 'ui.router'])
        .config(config);  
})();