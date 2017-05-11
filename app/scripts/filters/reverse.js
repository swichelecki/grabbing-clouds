(function() {
    function reverse() {
      return function(items) {
      return items.slice().reverse();
          
    };
        
    }
    
    angular
        .module('grabbing-clouds')
        .filter('reverse', reverse);
    
})();