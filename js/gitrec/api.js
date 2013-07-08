var Gitrec = Gitrec || {};

(function() {
  Gitrec.Api = (function() {
    var GITREC_HOST = "http://gitrec.m0rtardata.com";

    var default_handler = function(callback, error_callback) {
      return function(data) {
        if(data.error) {
          error_callback && error_callback(data.error);
        } else {
          callback && callback(data);
        }
      };
    };

    return {

      /* Gets the user recommendations for gitrec.com
       *
       * username - user to get recommendations for
       *
       * Returns via callback
       * { "contribution_recommendations" : [],
       *   "interest_recommendations" : [] }
       */
      getUserRecommendations : function(username, callback, error_callback) {
        $.ajax({
          url: GITREC_HOST + "/user/" + username,
          type: "GET",
          success: default_handler(callback, error_callback),
          beforeSend: function(jqXHR) {
            // Force jQuery to only put the json header
            // Typically it'll add a */* value on the end
            jqXHR.setRequestHeader("Accept", "application/json");
          },
          contentType: "application/json",
          dataType: "json"
        });
      },

      /* Gets the repo recommendations for gitrec.com
       *
       * repository - repo to get recommendations for
       *
       * Returns via callback
       * { "recommendations" : [] }
       */
      getRepoRecommendations : function(repository, callback, error_callback) {
        $.ajax({
          url: GITREC_HOST + "/repo/" + repository,
          type: "GET",
          success: default_handler(callback, error_callback),
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
