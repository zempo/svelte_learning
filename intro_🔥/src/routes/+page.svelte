<script>
	import PageContainer from './../lib/components/utils/PageContainer.svelte';
	import { siteTitle } from '$lib/config';
	export let data;
	let name = 'Solomon';
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<PageContainer pgClass="home_pg">
	<h1>Welcome, {name} 👋</h1>
	<input type="text" placeholder="What's your name?" bind:value={name} />
</PageContainer>

<style>
	input {
		width: 50%;
	}
</style>
