(function() {
  var app = (window.DARE = window.DARE || {}),
    self = (app.Masthead = {
      breakPoints: {},
      //track the status for all breakpoints in/out
      activeBreakPoints: {},
      init: function() {
        console.log("init masthead");
        self.updateContentHeights();
      },

      updateContentHeights: function() {
        console.log("update content height");
      }
    });
  console.log(JSON.stringify(app));
})();
