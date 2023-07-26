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
		color: var(--player6);
		font-weight: bold;
		// border-bottom-left-radius: 0.6rem;
		// border-bottom-right-radius: 0.6rem;
		button {
			width: 100%;
			background: var(--playerBtnBgd);
			color: var(--player6);
			border: none;
			// border-bottom-left-radius: 0.6rem;
			// border-bottom-right-radius: 0.6rem;
			padding: 0.5rem;
			cursor: pointer;
			font-weight: bold;
			// margin-bottom: 0;
		}
		.tracks_list {
			margin: 0;
			// height: 0;
			overflow: auto;
			background: var(--player1);
			list-style-type: none;
			padding-left: 0;
			height: auto;
			li {
				padding: 0.5rem 1.75rem;
				cursor: pointer;
				color: white;
				&:hover {
					background: var(--player2);
				}
			}
		}
	}
</style>
