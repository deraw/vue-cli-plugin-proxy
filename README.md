<p align="center">
	<a
		href="https://assurance-maladie-digital.github.io/vue-cli-plugin-proxy/"
		target="_blank"
		rel="noopener noreferrer"
	>
		<img
			width="280"
			src="./docs/img/vue.js.svg"
			alt="VueDot"
		>
	</a>
</p>

<h1 align="center">CNAM – Vue CLI plugin proxy</h1>

<p align="center">This plugin is meant to provide all [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware) options to vue-cli.</p>

<p align="center">
	<a href="https://www.npmjs.com/package/@cnamts/vue-cli-plugin-proxy">
		<img
			src="https://img.shields.io/npm/v/@cnamts/vue-cli-plugin-proxy.svg?style=flat-square"
			alt="NPM Version"
		>
	</a>
	<a href="https://www.npmjs.com/package/@cnamts/vue-cli-plugin-proxy">
		<img
			src="https://img.shields.io/npm/dw/@cnamts/vue-cli-plugin-proxy.svg?style=flat-square"
			alt="NPM Downloads"
		>
	</a>
	<a
		href="https://github.com/assurance-maladie-digital/vue-cli-plugin-proxy/blob/master/LICENSE">
		<img
			src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"
			alt="License"
		>
	</a>
</p>

## Issue

See the issue than initiated this plugin: [#2320](https://github.com/vuejs/vue-cli/issues/2320)

## As Easy as 1, 2, 3

### Install

``` bash
yarn add @cnamts/vue-cli-plugin-proxy # OR npm install @cnamts/vue-cli-plugin-proxy
```

### Use

``` js
// vue.config.js
module.exports = {
    pluginOptions: {
        proxy: {
            options: {
                // ...
            }
        }
    }
}
```

### You're done! 🎉

See [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware#example) for `options` object to pass to the plugin.

## License

Vue CLI plugin proxy is licensed under a [MIT  License](./LICENSE).
