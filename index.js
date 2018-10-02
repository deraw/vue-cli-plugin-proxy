var proxy = require('http-proxy-middleware');

module.exports = (api, options) => {
	api.configureDevServer((app) => {
		app.use(proxy(
			options.pluginOptions.proxy.options.context,
			options.pluginOptions.proxy.options.options
		));
	});
};
