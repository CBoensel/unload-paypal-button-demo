import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		title: 'Unload PayPal Button Demo',
		author: 'Carsten Boensel',
	}
});

export default app;