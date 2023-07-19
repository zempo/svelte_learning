<script>
	// @ts-nocheck

	import Slider from './Slider.svelte';
	import Tracklist from './Tracklist.svelte';
	import Controls from './Controls.svelte';
	import { onMount } from 'svelte';
	import AudioHead from './AudioHead.svelte';

	// @ts-ignore
	export let audioData;

	let slider;

	const updateProg = () => {
		slider.updateProgress();
	};

	$: console.log(audioData);

	let trackIdx = 0;
	let currFile;
	let AUD = {
		trackTitle: audioData[trackIdx].name,
		currFile
	};

	onMount(() => {
		// console.log(AUD);
		currFile = new Audio(audioData[trackIdx].url);
	});
</script>

<section class="player_container">
	<AudioHead title={AUD.trackTitle} />
	<div class="player_body">
		<audio src="" />
		<!-- <button on:click={updateProg}>Tester</button> -->
		<Slider bind:this={slider} />
		<Controls />
		<Tracklist trackList={audioData} />
	</div>
</section>

<style lang="scss">
	.player_container {
		width: 100%;
		max-width: 800px;
		margin: auto;
		.player_body {
			background: var(--playerSecondary);
		}
	}
</style>
