<script>
	// @ts-nocheck

	import { fade } from 'svelte/transition';
	import { getAUD, toggle } from './context/audioContext';

	// @ts-ignore
	export let trackList;

	let tracklistOpen = getAUD('tracklistOpen');

	const toggleTracklist = () => toggle(tracklistOpen);
</script>

<div class="tracklist_container">
	<button class:active={$tracklistOpen} on:click={toggleTracklist}>
		{#if $tracklistOpen}
			&#9776; Hide Tracklist
		{:else}
			&#9776; Expand Tracklist
		{/if}
	</button>
	{#if $tracklistOpen}
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
		button {
			width: 100%;
			background: var(--playerBtnBgd);
			color: var(--player6);
			border: none;
			padding: 0.5rem;
			cursor: pointer;
			font-weight: bold;
		}
		.tracks_list {
			margin: 0;
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
