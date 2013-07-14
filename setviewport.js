/* setviewport v1.01, by Joe Komenda (Komejo). Copyright 2013, MIT Licence.

  This script inserts a viewport metatag into the document head,
  based on the width set in the mobileWidth(); function call below.
  Useful if you want device scaling to be the default behavior for
  large mobile devices, such as tablets.

  Note that it also has orientation detection and substitution,
  so that rotated devices will use the widest aspect.

  The function mobileWidth(); makes two variable available to the
  global window object:
    svpObjectWidth  -  window or screen (whichever is smaller),
                       based on device orientation.
    svpTriggerWidth -  the width you set to trigger setviewport();
*/

function mobileWidth(width) {
    // Make svpObjectWidth and svpTriggerWidth available as global objects
    window.svpObjectWidth;
    window.svpTriggerWidth  = width;
    var screenWidth      = screen.width,
        screenHeight     = screen.height,
        windowWidth      = document.documentElement.clientWidth,
        windowHeight     = document.documentElement.clientHeight;

    // set the smaller of browser and screen width/height
    if (screenWidth <= windowWidth) { windowWidth = screenWidth };
    if (screenHeight <= windowHeight) { windowHeight = screenHeight };

    // use the height to set dimensions in landscape mode.
    if (window.orientation === undefined) {
        svpObjectWidth = windowWidth;
    } else if (window.orientation === 0) {
        svpObjectWidth = screenWidth;
    } else {
       svpObjectWidth = screenHeight;
    };
};

var hasViewport   = document.getElementById('viewport'),
    docHead       = document.getElementsByTagName('head')[0],
    viewport      = document.createElement('meta');
        viewport.id     = 'viewport';
        viewport.name   = 'viewport';
        viewport.content= 'width=device-width initial-scale=1';

mobileWidth(600);

if ( svpObjectWidth <= svpTriggerWidth && !hasViewport) {
    docHead.appendChild(viewport);
};