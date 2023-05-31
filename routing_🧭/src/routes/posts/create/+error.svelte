<script>
	import { page } from '$app/stores';
	import PageContainer from './../../../lib/components/utils/PageContainer.svelte';
</script>

<PageContainer pgClass="err_pg">
	<h1>Error! 😿</h1>
	<p>Something went wrong...</p>

	<pre>
    {JSON.stringify($page, null, 2)}
  </pre>
</PageContainer>
