var Gitrec = Gitrec || {};

(function() {
  Gitrec.Analytics = (function() {
    return {
      /* Record an event to Google Analytics
       *
       * String Category - category of the event
       * String Action - title of the action being performed
       * String Label - additional information (usually the target of the action)
       * Function cb - Callback to be executed after successfully recorded message
       */
      recordEvent: function(category, action, label, cb) {
        chrome.runtime.sendMessage({
          recordEvent: {
            category: category,
            action: action,
            label: label,
          },
        }, function(resp) {
          if(! resp.success) {
            console.log("Unable to log event");
          }
          cb && cb();
        });
      }
    };
  })();
})();
