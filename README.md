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

<p align="center">This plugin is meant to provide all http-proxy-middleware options to vue-cli.</p>

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

## As Easy as 1, 2, 3

### Install

``` bash
yarn add @cnamts/vue-cli-plugin-proxy # OR npm install @cnamts/vue-cli-plugin-proxy
```

### Load

``` ts
// main.ts
import Vue from 'vue';
import '@cnamts/vue-cli-plugin-proxy';

new Vue({
    render: (h) => h(App)
}).$mount('#app');
```

### You're done! 🎉

``` bash
# run your project
yarn serve # OR your own command
```

It automatically load all components and directives of the library and made them available globally.

## License

Vue CLI plugin proxy is licensed under a [MIT  License](./LICENSE).
