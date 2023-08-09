<script>
	import CanvasContainer from '$lib/components/layout/utils/CanvasContainer.svelte';
	import PageContainer from '$lib/components/layout/utils/PageContainer.svelte';
	import Scene1 from '$lib/components/scenes/Scene1.svelte';

	const pgData = {
		maxWidth: 2000,
		pgClass: `scene_pg`,
		pgType: `default`
	};
</script>

<PageContainer {...pgData}>
	<CanvasContainer>
		<Scene1 />
	</CanvasContainer>
</PageContainer>
