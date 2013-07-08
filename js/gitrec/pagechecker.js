var Gitrec = Gitrec || {};
(function(Gitrec) {
  Gitrec.Pagechecker = (function() {

    var PAGES = {
      /* Detect Github public repository page
       *
       * Returns Boolean
       */
      'repo_page' : function() {
        var requirements = [
          (document.location.pathname.split("/").length > 2),
          ($("meta[content='githubog:gitrepository']").length != 0),
          (!$(".repohead h1").hasClass("private"))
        ];
        return requirements.every(function(o) { return o == true });
      },
      
      /* Detect Github user page
       *
       * Returns Boolean
       */
      'user_page' : function() {
        var requirements = [
          (document.location.pathname.split("/").length == 2),
          ($('[data-name]').length != 0)
        ];
        return requirements.every(function(o) { return o == true });
      },
    };
    
    return {

      /* Public: Pages that pagechecker can detect
       *
       * Returns String
       */
      PAGES : {
        USER_PAGE : 'user_page',
        REPO_PAGE : 'repo_page',
      },

      /* Public: detects the current GitHub page the plugin is 
       * loaded on
       *
       * Throws error when cannot find page
       *
       * Returns PAGES enum string 
       */
      detectPage : function () {
        for(var page in PAGES) {
          if(PAGES[page]()) {
            return page;
          }
        }
        throw "Unable to detect page";
      },

      /* Public: Determines whether on the given page
       *
       * Returns boolean
       */
      onPage : function(page_string) {
        if(PAGES.hasOwnProperty(page_string)) {
          return PAGES[page_string]();
        }
        return false;
      },
    };
  })();
})(Gitrec);
