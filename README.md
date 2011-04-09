Simple build script for bookmarklets.

It makes few things:

* minifies your code (using uglify-js)
* wraps your code in `(function(){}())` if it's not wrapped yet
* adds `javascript:` prefix
* preforms encodeURI to prevent collisions with double-quotes in `A href`
* optionally, generates HTML file with `A` element to test your bookmarklet

Install:
`npm install bookbu`
or just clone it from github.

Usage:
`bookbu.js <filename> [html]`

To just parse the code and get result in the console:
`bookbu.js test.js`

To generate html file in which you'll get a link with your bookmarklet:
`bookbu.js test.js html`

Example:
    magic-missile:~/projects/test $ cat test.js
    function addTwoValues(a,b) {
        return a + b;
    };

    var myFancyObject = {
        x: 3,
        y: 5
    };

    addTwoValues(myFancyObject.x, myFancyObject.y);
    magic-missile:~/projects/test $ bookbu.js test.js
    javascript:(function()%7Bfunction%20a(a,b)%7Breturn%20a+b%7Dvar%20b=%7Bx:3,y:5%7D;a(b.x,b.y)%7D())
    magic-missile:~/projects/test $

You may of course pipe this however you want, so `bookbu test.js | pbcopy` will copy the code of generated bookmarklet to your clipboard.

Dependencies: [uglify-js](https://github.com/mishoo/UglifyJS "uglify-js")
