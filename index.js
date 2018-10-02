var proxy = require('http-proxy-middleware');

module.exports = api => {
	api.configureDevServer((app) => {
		app.use(proxy(projectOptions.pluginOptions.proxy.context, projectOptions.pluginOptions.proxy.options));
	});
};
