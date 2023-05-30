<script>
	import PageContainer from './../../lib/components/utils/PageContainer.svelte';
	import { siteDescription } from '$lib/config';
	import { onDestroy, onMount } from 'svelte';

	const people = [
		{
			name: `ken`,
			job: `accountant`
		}
	];
	// console.table(people);

	onMount(() => console.log(`Mounted posts page`));
	onDestroy(() => console.log('Unmounted posts page'));
</script>

<svelte:head>
	<title>Posts</title>
	<meta name="description" content={siteDescription} />
</svelte:head>

<PageContainer pgClass="posts_pg">
	<h1>Posts</h1>
</PageContainer>
