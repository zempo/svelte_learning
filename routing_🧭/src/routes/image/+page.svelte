<script>
	import { imgHeight, imgWidth } from '$lib/assets/store';

	// @ts-nocheck

	import PageContainer from '$lib/components/utils/PageContainer.svelte';
</script>

<PageContainer pgClass="image_pg">
	<h1>Image</h1>

	<h3>
		<a href={`/image/${$imgWidth}x${$imgHeight}`}>View {$imgWidth} x {$imgHeight} Images</a>
	</h3>

	<label>
		<b>Width</b>
		<input type="number" bind:value={$imgWidth} min="50" max="2000" step="50" />
	</label>
	<label>
		<b>Height</b>
		<input type="number" bind:value={$imgHeight} min="50" max="2000" step="50" />
	</label>
</PageContainer>
