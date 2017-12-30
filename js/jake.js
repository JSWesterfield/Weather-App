var jake = {
    utilities: {}
    , layout: {}
    , page: {
      handlers: {
      }
      , startUp: null
    }
    , services: {}
    , ui: {}

};
jake.moduleOptions = {
      APPNAME: "JakeApp"
      , extraModuleDependencies: []
      , runners: []
      , page: jake.page //we need this object here for later use
}

jake.layout.startUp = function() {

      console.debug("jake.layout.startUp");

      //this does a null check on jake.page.startUp
      if(jake.page.startUp) {
        console.debug("jake.page.startUp");
        jake.page.startUp();
      }
};
jake.APPNAME = "JakeApp"; //legacy


$(document).ready(jake.layout.startUp);
