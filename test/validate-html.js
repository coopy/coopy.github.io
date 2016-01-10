var path = require('path');
var w3cjs = require('w3cjs');

var indexHtml = path.join(__dirname, '..', 'index.html');

var results = w3cjs.validate({
	file: indexHtml,
	output: 'json', // Defaults to 'json', other option includes html
	callback: function (res) {
    var errors = res.messages.filter(function (message) {
      return message.type === 'error';
    });

    if (errors.length > 0) {
      console.error('HTML validation errors:');
      errors.map(function (err) {
        console.error('Line ' + err.lastLine + ': ' + err.message);
      });
      throw new Error('Invalid HTML');
    }
	}
});
