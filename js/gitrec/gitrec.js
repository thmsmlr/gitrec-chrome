var Gitrec = Gitrec || {};

(function(Gitrec){
  /* Tries to extract the GitHub username from the current
   * page context
   *
   * Throws error if cannot find
   *
   * Return String
   */
  Gitrec.getUsername = function() {
    if(Gitrec.Pagechecker.onPage(Gitrec.Pagechecker.PAGES.USER_PAGE)
        || Gitrec.Pagechecker.onPage(Gitrec.Pagechecker.PAGES.REPO_PAGE)) {
      return document.location.pathname.split('/')[1];
    }
    throw "Cannot extract username from current page context";
  };

  /* Tries to extract the GitHub repository from the current
   * page context
   *
   * Throws error if cannot find
   *
   * Return String
   */
  Gitrec.getRepository = function() {
    if(Gitrec.Pagechecker.onPage(Gitrec.Pagechecker.PAGES.REPO_PAGE)) {
      return document.location.pathname.split('/')[2];
    }
    throw "Cannot extract repository from current page context";
  };
})(Gitrec);
