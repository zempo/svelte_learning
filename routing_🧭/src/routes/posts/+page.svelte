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

	<p class="create_post">
		<a href="/posts/create" role="button">+ New Post</a>
	</p>

	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut mollitia officiis quaerat
		tempora consequuntur natus illum dolor repellat. Optio!
	</p>

	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi amet, soluta
		architecto optio, inventore, rem esse illo corporis sint molestiae facere officiis repellendus
		sequi est recusandae omnis fuga cupiditate quia. Voluptatibus accusantium impedit rem reiciendis
		aspernatur iusto!
	</p>
</PageContainer>

<style>
	.create_post a {
		/* padding-block: 1.5rem;
		padding-inline: 0.75rem;
		border: 1px solid gray;
		color: blueviolet;
		font-weight: bold;
		border-radius: 0.5rem; */
	}
</style>
