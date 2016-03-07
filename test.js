/*jshint expr: true*/
var chaiHTTP = require('chai-http'),
	assert = require('assert'),
	expect = require('chai').expect,
	server = require('./server.js').server,
	Joke = require('./app.js').Joke,
	chai = require('chai');

chai.use(chaiHTTP);


var app = new Joke();

describe('ServeLaff get method', function () {

	describe('server', function () {
		it('should have a get method', function (done) {
			app.get();
			chai.request('localhost:3000')
			.get('/joke')
			.end(function (err, res){
				expect(res.status).to.eql(200);
				expect(res.text).to.be.a('string');
				done();
			});
		});
server.destroy();
	});
});

describe('ServeLaff post method', function () {

	describe('server', function () {
		it('should have a post method', function (done) {
			app.post('bad joke');
			chai.request('localhost:8080')
			.post('/joke')
			.end(function (err, res) {
				expect(res.status).to.eql(200);
				expect(res.text).to.eql('bad joke');
				done();
			});
		});
server.destroy();
	});
});
