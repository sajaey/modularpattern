(function() {
  var app = (window.DARE = window.DARE || {}),
    self = (app.MAIN = {
      breakPoints: {},

      //track the status for all breakpoints in/out
      activeBreakPoints: {},

      start: function(options) {
        var breakPointName, moduleName, module;

        console.log(JSON.stringify(app));
        for (moduleName in app) {
          if (app.hasOwnProperty(moduleName)) {
            module = app[moduleName];
            console.log("Module Name " + moduleName);
            //determine if the module should be initialized
            if (module.init && (!module.shouldRun || module.shouldRun())) {
              if (options[moduleName.toLowerCase() + "_options"]) {
                module.init(options[moduleName.toLowerCase() + "_options"]);
              } else {
                module.init();
              }
            }
          }
        }
      }
    });
})();
