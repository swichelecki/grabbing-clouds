(function() {
    function Email($firebaseArray) {
        
        var Email = {};
        
        var ref = firebase.database().ref().child('email');
        
        var email = $firebaseArray(ref);
        
        Email.addEmail = function(emailAddress) {
            
        email.$add({
            email: emailAddress
        });
            
        }
        
        return Email;
    }
    
    angular
        .module('grabbing-clouds')
        .factory('Email', ['$firebaseArray', Email]);
})();