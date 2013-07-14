#setviewport

A small JS script to insert the viewport meta tag into an HTML document's head at a specified width.

### Implementation

Insert the viewport.min.js code in the document `head`, preferably at the earliest point after the opening `<head>` tag.
Find the function call 'mobileWidth(600);` and set it to the width (in pixels) that you want the viewport tags to render.

The default viewport metatag settings are:
    width=device-width initial-scale=1

Edit as you see fit.


### License and Credits

© 2013 <a href="https://github.com/komejo">Komejo</a>. Created by <a href="http://twitter.com/KomejoDev">Joe Komenda</a>.
<br />
setviewport.js is released under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.