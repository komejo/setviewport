#setviewport

A small script (JS) to insert the viewport meta tag into an HTML document's `head` at a specified width.
Now with example app.js script to clarify use of the global vars.

## Basic Use:

Insert the viewport.js code in the document `head`, preferably at the earliest point after the opening `<head>` tag.
Find the `window.triggerWidth;` global and set it to the width (in pixels) that you want the viewport tag to render.

[See live example](http://komejo.com/setviewport/example.html) This is a same code as [example.html](https://github.com/komejo/setviewport/blob/master/example.html)

600 (pixels) is the default.

The default viewport metatag settings are: `width=device-width initial-scale=1`

Note that it also has orientation detection and substitution, so that rotated devices will use the widest aspect.


## Available Vars:

The function `mobileWidth();` adds a variable to the global window object:

`viewportWidth` - window or screen (whichever is smaller), based on device orientation.

In addition, we set the `triggerWidth` -  the width you set when calling `mobileWidth()`, also used to trigger `addViewport()`

The purpose of making these available globally is to allow for additional JS/jQuery usage, for example, in your main JS file, you could have the following:

    var isMobile = false;
    if ( viewportWidth <= triggerWidth ) {
        isMobile = true;
    }

See extended example in [app.js](https://github.com/komejo/setviewport/blob/master/app.js)

## License and Credits

© 2013,2014 <a href="https://github.com/komejo">Komejo</a>. Created by <a href="http://twitter.com/KomejoDev">Joe Komenda</a>.

setviewport.js is released under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.
