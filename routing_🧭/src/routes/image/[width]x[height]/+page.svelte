<script>
	import { page } from '$app/stores';
	import PageContainer from '$lib/components/utils/PageContainer.svelte';
</script>

<PageContainer pgClass="image_pg">
	<h1>Image</h1>
	<pre>
    {JSON.stringify($page, null, 2)}
  </pre>
</PageContainer>
