Simple build script for bookmarklets.

It makes few things:

* minifies your code (using uglify-js)
* wraps your code in `(function(){}())` if it's not wrapped yet
* adds `javascript:` prefix
* preforms encodeURI to prevent collisions with double-quotes in `A href`
* optionally, generates HTML file with `A` element to test your bookmarklet

Usage:
`bookbu.js <filename> [html]`

To just parse the code and get result in the console:
`node bookbu.js test.js`

To generate html file in which you'll get a link with your bookmarklet:
`node bookbu.js test.js html`

Dependencies: [uglify-js](https://github.com/mishoo/UglifyJS "uglify-js")
