var Gitrec = Gitrec || {};
(function(Gitrec) {
  Gitrec.Templator = (function () {

    /**
     * Internal Factory: Creates a function that'll remotely request
     * the template the first time, then cache and return it each time there after.
     *
     * Returns template string
     */
    var template_getter = function(template_path) {
      var template;
      return function(callback) {
        // If null
        if(template === undefined || template === null) {
          $.get(chrome.runtime.getURL(template_path), function(template_string) {
            template = template_string;
            callback(template);
          });
        } else {
            callback(template);
        }
      };
    };

    /**
     * Enumeration of all templates available
     */
    var TEMPLATES = {
      'user_recommendation_shell' : new template_getter('templates/user_recommendation_shell.html'),
      'user_recommendations' : new template_getter('templates/user_recommendations.html'),
      'repo_recommendations' : new template_getter('templates/repo_recommendations.html'),
      'repo_recommendations_error' : new template_getter('templates/repo_recommendations_error.html'),
      'repo_tab' : new template_getter('templates/tab.html')
    };

    return {
      /**
       * Template enum
       */
      TEMPLATES : {
        USER_RECOMMENDATION_SHELL : 'user_recommendation_shell',
        USER_RECOMMENDATIONS : 'user_recommendations',
        REPO_RECOMMENDATIONS : 'repo_recommendations',
        REPO_RECOMMENDATIONS_ERROR : 'repo_recommendations_error',
        REPO_TAB : 'repo_tab'
      },

      /**
       * Get the specified template
       *
       * template_name  - value from TEMPLATE ENUM
       * callback       - callback for when the template is eventually returned
       *
       * Returns an _.template via callback
       */
      get : function(template_name, callback) {
        TEMPLATES[template_name](callback);
      },
    };
  })();
})(Gitrec);

