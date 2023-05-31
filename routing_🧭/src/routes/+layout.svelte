<script>
	// @ts-nocheck

	import { currPg } from '$lib/assets/store';
	import { navItems } from '$lib/config';
	// import PageContainer from './../lib/components/utils/PageContainer.svelte';
	import Header from '$lib/components/static/Header.svelte';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	// @ts-ignore
	export let data;
	// @ts-ignore
	export const prerender = true;

	// @ts-ignore
	let name = `Solomon`;

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	// @ts-ignore
	$: currPg.set(data.path);

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/
	onMount(() => {
		// @ts-ignore
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});
</script>

<div class="layout">
	<Header />
	{#key data.path}
		<main id="main" tabindex="-1" in:fade={transitionIn} out:fade={transitionOut}>
			<slot />
		</main>
	{/key}
</div>
