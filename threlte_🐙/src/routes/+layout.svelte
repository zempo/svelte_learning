<script>
	import { fade } from 'svelte/transition';
	import { preloadCode } from '$app/navigation';
	import { currPg } from '$lib/assets/js/siteStore.js';
	import '$lib/assets/scss/Global.scss';
	import Header from '$lib/components/layout/Header.svelte';
	import { NavPages } from '$lib/config.js';
	import { onMount } from 'svelte';

	export let data;
	const transitionIn = { duration: 300 };
	const transitionOut = { duration: 300 };

	export const prerender = true;

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currPg.set(data.path);

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/
	onMount(() => {
		const navRoutes = NavPages.map((item) => item.href);
		preloadCode(...navRoutes);
	});
</script>

<div class="app_body">
	<Header />
	{#key data.path}
		<main
			id="main"
			class="app_main"
			tabindex="-1"
			in:fade|global={transitionIn}
			out:fade|global={transitionOut}
		>
			<slot />
		</main>
	{/key}
</div>
