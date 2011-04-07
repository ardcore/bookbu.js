Simple build script for bookmarklets.

It makes few things:
*   minifies your code (using uglify-js)
*   wraps your code in `(function(){}())` if it's not wrapped yet
*   adds `javascript:` prefix
*   replaces `"` with `'`
*   optionally, generates HTML file with `A` element to test your bookmarklet

Usage:
`bookbu.js <filename> [html]`

To just parse the code and get result in the console:
`node bookbu.js test.js`

To generate html file in which you'll get a link with your bookmarklet:
`node bookbu.js test.js html`

If you're piping the command and want to avoid warnings, simply use:
`node bookbu.js test.js 2> /dev/null`

Dependencies: [uglify-js](https://github.com/mishoo/UglifyJS "uglify-js")