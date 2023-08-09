<script>
	import CanvasContainer from '$lib/components/layout/utils/CanvasContainer.svelte';
	import PageContainer from '$lib/components/layout/utils/PageContainer.svelte';
	import HomeScene from '$lib/components/scenes/HomeScene.svelte';

	const pgData = {
		maxWidth: 1200,
		pgClass: `home_pg`,
		pgType: `default`
	};
</script>

<PageContainer {...pgData}>
	<CanvasContainer>
		<HomeScene />
	</CanvasContainer>
</PageContainer>
