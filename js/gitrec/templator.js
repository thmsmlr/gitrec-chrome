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
      'repo_button' : new template_getter('templates/button.html'),
    };

    return {
      /**
       * Template enum
       */
      TEMPLATES : {
        REPO_BUTTON : 'repo_button',
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
      }

    }
  })();
})(Gitrec);

