var Gitrec = Gitrec || {};

(function() {
  Gitrec.Api = (function() {
    var GITREC_HOST = "http://gitrec.mortardata.com";
    return {
      /* Gets the user recommendations for gitrec.com
       *
       * username - user to get recommendations for
       *
       * Returns via callback
       * { "contribution_recommendations" : [],
       *   "interest_recommendations" : [] }
       */
      getUserRecommendations : function(username, callback) {
        var recommendations = {};
        $.ajax({
          url: GITREC_HOST + "/user/" + username,
          type: "GET",
          success: callback,
          beforeSend: function(jqXHR) {
            // Force jQuery to only put the json header
            // Typically it'll add a */* value on the end
            jqXHR.setRequestHeader("Accept", "application/json");
          },
          contentType: "application/json",
          dataType: "json"
        });
      },
    };
  })();
})();
