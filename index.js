var proxy = require('http-proxy-middleware');

module.exports = api => {
	api.configureDevServer((app) => {
		app.use(proxy(
			api.projectOptions.pluginOptions.proxy.context,
			api.projectOptions.pluginOptions.proxy.options
		));
	});
};
