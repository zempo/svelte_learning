<script>
	import PageContainer from './../../lib/components/utils/PageContainer.svelte';
	import { siteDescription } from '$lib/config';

	const people = [
		{
			name: `ken`,
			job: `accountant`
		}
	];
	console.table(people);
</script>

<svelte:head>
	<title>Posts</title>
	<meta name="description" content={siteDescription} />
</svelte:head>

<PageContainer pgClass="posts_pg">
	<h1>Posts</h1>
</PageContainer>
