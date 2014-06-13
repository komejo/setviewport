var setViewport = new function() {

    var isMobile;

    this.init = function() {
        self.responsive();
    };

    // The mobileWidth function and triggerWidth/viewportWidth globals are
    // set in the header, since they need to fire before everything else.
    // Note that this example relies on jQuery and underscore.js (for the _.debounce(function())
    this.responsive = function() {
        $(window).resize(_.debounce(function(){
            mobileWidth();
            self.mobileActivate();
        },500));
        self.mobileActivate();
    };

   this.mobileActivate = function() {
        if (viewportWidth <= triggerWidth) { // if it's mobile size
            if (!hasViewport) { // if the viewport tag hasn't been set - i.e., resize from non-mobile
                addViewport();
            };
            if (!self.isMobile) { // if we have not run mobilePageModsOn
                self.mobilePageModsOn();
            }
        } else { // non-mobile
            if ($('#viewport').length) {
                $('#viewport').remove();
                self.mobilePageModsOff();
            };
        }
    };

    // This should contain everything you want to
    // happen only in the mobile state via JS.
    this.mobilePageModsOn = function() {
        self.isMobile = true;
    };

    // This is for when you transition out of the mobile state.
    this.mobilePageModsOff = function() {
        self.isMobile = false;
    };
};
jQuery(document).ready(function($){
    setViewport.init();
});