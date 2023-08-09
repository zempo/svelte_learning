<script>
	import { page } from '$app/stores';
	import PageContainer from '$lib/components/layout/utils/PageContainer.svelte';

	const pgData = {
		maxWidth: 1200,
		pgClass: `err_pg`,
		pgType: `default`
	};
</script>

<!-- <PageContainer {...pgData}>
</PageContainer> -->
<h1>Uh Oh.</h1>
<h2>{$page.status}</h2>
<p class="subhead">{$page.error.message}</p>

<p><strong>Sorry!</strong> Maybe try one of these links?</p>
<ul>
	<li><a href="/">Home</a></li>
</ul>
