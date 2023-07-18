<script>
	// @ts-nocheck

	// @ts-ignore
	export let trackList;

	let listShowing = false;

	const showTracklist = () => (listShowing = !listShowing);
</script>

<div class="tracklist_container">
	<button class:active={listShowing} on:click={showTracklist}>&#9776; Track List</button>
	<ul class:show_list={listShowing}>
		{#each trackList as { name }, idx}
			<li data-track-id={idx} on:click>
				{name}
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.tracklist_container {
		border: 1px solid green;
		button {
			width: 100%;
			// margin-bottom: 0;
		}
		ul {
			margin: 0;
			height: 0;
			overflow: auto;
			border: 1px solid blue;
			transition: height 0.3s;
			list-style-type: none;
			padding-left: 0;
			li {
				padding: 0.5rem 1.75rem;
				cursor: pointer;
			}
			&.show_list {
				height: auto;
			}
		}
	}
</style>
