/* This script inserts a viewport metatag into the document head,
   based on the width set in the mobileWidth(); function call below.
   Useful if you want device scaling to be the default behavior for
   most devices (desktop, tablet, etc.).
*/

function mobileWidth(width) {
    // Make objectWidth and triggerWidth available as global objects
    window.objectWidth;
    window.triggerWidth  = width;
    var screenWidth      = screen.width,
        screenHeight     = screen.height,
        windowWidth      = document.documentElement.clientWidth,
        windowHeight     = document.documentElement.clientHeight;

    // set the smaller of browser and screen width/height
    if (screenWidth <= windowWidth) { windowWidth = screenWidth };
    if (screenHeight <= windowHeight) { windowHeight = screenHeight };

    // use the height to set dimensions in landscape mode.
    if (window.orientation === undefined) {
        objectWidth = windowWidth;
    } else if (window.orientation === 0) {
        objectWidth = screenWidth;
    } else {
       objectWidth = screenHeight;
    };
};

var hasViewport   = document.getElementById('viewport'),
    docHead       = document.getElementsByTagName('head')[0],
    viewport      = document.createElement('meta');
        viewport.id     = 'viewport';
        viewport.name   = 'viewport';
        viewport.content= 'width=device-width initial-scale=1';

mobileWidth(600);

if ( objectWidth <= triggerWidth && !hasViewport) {
    docHead.appendChild(viewport);
};