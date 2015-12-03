/**
 * Created by vikram.aravamudhan on 12/2/2015.
 */


(function(){

    Parse.initialize("pp4pwJwPu2ucLvNdqbAJOjt2UPFWyMoHq1dZRVCz", "LNVDw4TLXKf7xYajvmgdNC0W4mN4vJyq8qg65dkb");

    var Help = Parse.Object.extend("help");

    var query = new Parse.Query(Help);
    //query.equalTo("playerName", "Dan Stemkoski");
    query.find({
        success: function(results) {
            alert("Successfully retrieved " + results.length + " helps");
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                alert(object.id);
            }
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}());