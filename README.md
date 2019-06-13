<p align="center">
  <img
    width="280"
    src="https://user-images.githubusercontent.com/10298932/59419196-af91f800-8dca-11e9-9ea8-de5567e9e471.png"
    alt=""
  >
</p>

<h1 align="center">Vue CLI proxy plugin</h1>

<p align="center">This plugin is meant to provide all <a href="https://www.npmjs.com/package/http-proxy-middleware">http-proxy-middleware</a> options to vue-cli.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue-cli-proxy-plugin">
    <img
      src="https://img.shields.io/npm/v/vue-cli-proxy-plugin.svg?style=flat-square"
      alt="NPM Version"
    >
  </a>
  <a href="https://www.npmjs.com/package/vue-cli-proxy-plugin">
    <img
      src="https://img.shields.io/npm/dw/vue-cli-proxy-plugin.svg?style=flat-square"
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

See [the issue than initiated this plugin (#2320)](https://github.com/vuejs/vue-cli/issues/2320)

## Installation

``` bash
yarn add vue-cli-proxy-plugin
# OR npm install vue-cli-proxy-plugin
```

## Usage

```js
// vue.config.js
module.exports = {
		pluginOptions: {
				proxy: {
						enabled: true,
						context: '',
						options: {
								// ...
						}
				}
		}
}
```

## Options

See [http-proxy-middleware](https://www.npmjs.com/package/http-proxy-middleware#tldr) for `options` object to pass to the plugin.

### Object examples

* First example of the docs:

```js
// vue.config.js
module.exports = {
		pluginOptions: {
				proxy: {
						enabled: true,
						context: '/api',
						options: {
								target: 'http://www.example.org',
								changeOrigin: true
						}
				}
		}
}
```

* v1.0.0 default:

```js
// vue.config.js
module.exports = {
		pluginOptions: {
				proxy: {
						enabled: true,
						context: [
							'/**',
							'!/dist/**'
						],
						options: {
								target: 'http://127.0.0.1:8000'
						}
				}
		}
}
```

## License

Vue CLI Plugin Proxy is licensed under [MIT License](./LICENSE).
