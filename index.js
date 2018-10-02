var proxy = require('http-proxy-middleware');

module.exports = api => {
	api.configureDevServer((app) => {
		app.use(proxy(['/**', '!/dist/**'], { target: 'http://127.0.0.1:8000' }));
	});
};
