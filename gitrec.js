(function() {
  var is_repo_private = $(".repohead h1").hasClass("private");
  if(!is_repo_private) {
    console.log("Loading Gitrec Recommendations");
    repo_path_name = document.location.pathname;
    recommendation_html = 
    "\
      <li>\
        <a href='http://gitrec.mortardata.com/repo" + repo_path_name + "' class='minibutton' title='Get Repository Recommendations'>\
          <span class='octicon octicon-repo'></span>\
          <span class='text'>Recommended Repos</span>\
        </a>\
      </li>\
    ";
    $("ul.pagehead-actions").prepend(recommendation_html);
  }
})();
