(function(global) {

	var parser = require('uglify-js').parser,
		ugly = require('uglify-js').uglify,
		fs = require('fs'),
		target = process.argv[2],
		output = process.argv[3],
		parsedCode,
		result,
		outfile;

	if (!target || target == 'help' || target == '-h' || target == '--help') {
		console.log('Usage: bookbu.js <filename> [html]\n' +
			'Example: bookbu.js test.js html');
		process.exit(1);
	}

	fs.readFile(target, 'utf8', function (err, data) {
		if (err) throw err;
		parsedCode = parser.parse(data);
		parsedCode = ugly.ast_mangle(parsedCode, {toplevel: true});
		parsedCode = ugly.ast_squeeze(parsedCode);
		result = ugly.gen_code(parsedCode);

		if (!result.match(/^\(function\(/)) {
			result = 'javascript:(function(){' + result + '}())';
		} else {
			result = 'javascript:' + result;
		}

		if (result.match(/"/)) {
			result = result.replace(/"/g, "'");
			console.warn("Warning: replaced double quotes in your code " +
				"with single ones. In some cases it may break.");
		}

		if (output == 'html') {
			outfile = target + '-bookbu.html';
			result = '<!DOCTYPE html><html><body><style>' +
				'body { width: 200px; font-size: 12px;}' +
				'textarea { border: 1px solid #ccc }' +
				'a { background: #ccc; padding: 5px }</style>' +
				'<p>Drag: <a href="' + result + '">' + target + '</a>.</p>' +
				'<p>Code:</p><textarea>' + result + '</textarea>' +
				'</body></html>';

			fs.writeFile(outfile, result, 'utf8', function() {
				console.log('File ' + __dirname + "/" + outfile + ' created. ' +
					'Please open it in your browser');
			})
		} else {
			console.log(result);
		}
	});
}(this));