<script>
	import { page } from '$app/stores';
	import PageContainer from '$lib/components/utils/PageContainer.svelte';
</script>

<PageContainer pgClass="rest_pg">
	<h1>Rest Parameters</h1>

	<h3>Showing info for...</h3>
	<pre>
    {JSON.stringify($page, null, 2)}
  </pre>
</PageContainer>
