var Gitrec = Gitrec || {};
(function(Gitrec) {

  /* Gets the repo page templates and injects them onto the page
   *
   * Return nothing
   */
  var setupRepoPage = function() {
    Gitrec.Templator.get(Gitrec.Templator.TEMPLATES.REPO_BUTTON, function(button_template_string) {
      $("ul.pagehead-actions").prepend(_.template(button_template_string)({
        username : Gitrec.getUsername(),
        repository : Gitrec.getRepository(),
      }));
    });
  };

  $(document).ready(function() {
    try {
      var current_page = Gitrec.Pagechecker.detectPage();

      switch(current_page) {
        case Gitrec.Pagechecker.PAGES.USER_PAGE:
          alert("Userpage");
          break;
        case Gitrec.Pagechecker.PAGES.REPO_PAGE:
          setupRepoPage();
          break;
        default:
          console.error("unknown page");
      }
    } catch(err) {
      console.log(err);
    }
  });
})(Gitrec);
