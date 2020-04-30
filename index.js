const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (api, options) => {
	const opts = options.pluginOptions && options.pluginOptions.proxy;

	if (opts && (opts.enabled === undefined || opts.enabled)) {
		api.configureDevServer((app) => {
			app.use(createProxyMiddleware(
				opts.context,
				opts.options
			));
		});
	}
};
