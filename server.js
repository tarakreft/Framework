var http = require('http'),
	url = require('url');

var ServeLaff = function (laff) {
	var server = http.createServer(function (req, res) {
		if ( req.url === '/joke' ) {

		ServeLaff.write = function () {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(laff);
		};	

			if (req.method === 'GET') {		
				ServeLaff.write();
			}
			else if (req.method === 'POST') {
				var body = '';
				req.on('data', function (chunk) {
					body += chunk.toString();
				});
				ServeLaff.write();
			}
			else if (req.method === 'DELETE') {
				for (var i = 0; i < jokes.length; i++) {
					if (jokes[i] == badJoke) {
						jokes.splice(i, 1);
					}
				ServeLaff.write();	
				}
			}		
		res.end();	
		}

	});	


	ServeLaff.listen = function (message) {
		server.listen(3000, function (err) {
			if (err) throw err;
			console.log(message);
		});
	};
};

module.exports.ServeLaff = ServeLaff;

