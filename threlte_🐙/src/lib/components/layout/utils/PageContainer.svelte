<script>
	export let maxWidth;
	export let pgClass;
	export let pgType;
</script>

{#if pgType === 'default'}
	<section class="app_pg {pgClass ? pgClass : ''}" style="max-width: {maxWidth}px;">
		<slot>
			<h1>Page Container</h1>
		</slot>
	</section>
{:else if pgType === 'scene'}
	<article class="app_scene {pgClass ? pgClass : ''}" style="max-width: {maxWidth}px;">
		<slot>
			<h1>This is a 3d Scene</h1>
		</slot>
	</article>
{/if}

<style lang="scss">
	.app_pg {
		margin: auto;
		position: relative;
		padding: 5rem 1rem 1rem 1rem;
		min-height: 100vh;
	}
	.app_scene {
		margin: auto;
		position: relative;
		padding: 5rem 1rem 1rem 1rem;
	}
</style>
