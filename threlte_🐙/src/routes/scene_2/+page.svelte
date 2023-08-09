<script>
	import CanvasContainer from '$lib/components/layout/utils/CanvasContainer.svelte';
	import PageContainer from '$lib/components/layout/utils/PageContainer.svelte';
	import Scene2 from '$lib/components/scenes/Scene2.svelte';

	const pgData = {
		maxWidth: 2000,
		pgClass: `scene_pg`,
		pgType: `default`
	};
</script>

<PageContainer {...pgData}>
	<CanvasContainer>
		<Scene2 />
	</CanvasContainer>
</PageContainer>
