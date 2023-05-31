<script>
	import { page } from '$app/stores';
	import PageContainer from './../../../lib/components/utils/PageContainer.svelte';
</script>

<PageContainer pgClass="post_page">
	<h1>Post</h1>
	<pre>
    {JSON.stringify($page, null, 2)}
  </pre>
</PageContainer>
