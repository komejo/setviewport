#setviewport

A small JS script to insert the viewport meta tag into an HTML document's `head` at a specified width.


## Basic Use:

Insert the viewport.min.js code in the document `head`, preferably at the earliest point after the opening `<head>` tag.
Find the function call 'mobileWidth(600);` and set it to the width (in pixels) that you want the viewport tag to render.
[See example](https://github.com/komejo/setviewport/blob/master/example.html)

600 is the default.

The default viewport metatag settings are: `width=device-width initial-scale=1`

Note that it also has orientation detection and substitution, so that rotated devices will use the widest aspect.


## Available Vars:

The function `mobileWidth();` adds two variables to the global window object:

`objectWidth` - the smaller of window or screen, based on device orientation.

`triggerWidth` -  the width you set when calling `mobileWidth()`, used to trigger `setviewport()`

The purpose of making these available globally is to allow for additional JS/jQuery usage, for example, in your main JS file, you could have the following:

    var isMobile = false;
    if ( objectWidth <= triggerWidth ) {
        isMobile = true;
    }


## License and Credits

© 2013 <a href="https://github.com/komejo">Komejo</a>. Created by <a href="http://twitter.com/KomejoDev">Joe Komenda</a>.

Minified using http://refresh-sf.com/yui/

setviewport.js is released under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.
