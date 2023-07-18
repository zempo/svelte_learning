<script>
	// @ts-nocheck

	import Slider from './Slider.svelte';
	import Tracklist from './Tracklist.svelte';
	import Controls from './Controls.svelte';

	// @ts-ignore
	export let audioData;

	let slider;

	const updateProg = () => {
		slider.updateProgress();
	};
</script>

<section class="player_container">
	<h3 class="track_title">Title</h3>
	<div class="player_body">
		<audio src="" />
		<button on:click={updateProg}>Tester</button>
		<Controls />
		<Slider bind:this={slider} />
		<Tracklist trackList={audioData} />
	</div>
</section>

<style lang="scss">
	.player_container {
		.track_title {
			border-top-left-radius: 0.3rem;
			border-top-right-radius: 0.3rem;
			background: var(--playerPrimary);
			color: white;
			text-align: center;
			line-height: 2;
			margin-bottom: 0;
		}
		.player_body {
			background: var(--playerSecondary);
		}
	}
</style>
