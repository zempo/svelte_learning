<script>
	// @ts-nocheck

	import { fade } from 'svelte/transition';
	// @ts-nocheck

	// @ts-ignore
	export let trackList;

	let listShowing = false;

	const showTracklist = () => (listShowing = !listShowing);
</script>

<div class="tracklist_container">
	<button class:active={listShowing} on:click={showTracklist}>
		{#if listShowing}
			&#9776; Hide Tracklist
		{:else}
			&#9776; Expand Tracklist
		{/if}
	</button>
	{#if listShowing}
		<ul class="tracks_list" transition:fade|global={{ duration: 250 }}>
			{#each trackList as { name }, idx}
				<li data-track-id={idx} on:click>
					{name}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style lang="scss">
	.tracklist_container {
		border: 1px solid green;
		button {
			width: 100%;
			background: transparent;
			border: 1px solid var(--textFade);
			padding: 0.5rem;
			cursor: pointer;
			// margin-bottom: 0;
		}
		.tracks_list {
			margin: 0;
			// height: 0;
			overflow: auto;
			border: 1px solid blue;
			// transition: height 0.3s;
			list-style-type: none;
			padding-left: 0;
			height: auto;

			li {
				padding: 0.5rem 1.75rem;
				cursor: pointer;
			}
		}
	}
</style>
