<script>
	// @ts-nocheck
	// import {
	// 	trackIdx,
	// 	trackTitle,
	// 	currFile,
	// 	loopOn,
	// 	updateFile,
	// 	totalTrackTime,
	// 	loadMeta
	// } from './scripts/audioStore';
	import { getAUD, initControls, initFile, set } from './context/audioContext';
	import { onMount } from 'svelte';

	import AudioHead from './AudioHead.svelte';
	import Controls from './Controls.svelte';
	import Tracklist from './Tracklist.svelte';
	import Slider from './Slider.svelte';
	// import { derived } from 'svelte/store';

	// import { get } from 'svelte/store';

	export let audioData;
	// optional start idx prop
	export let initIdx = 0;

	let audio;

	initFile(audioData[initIdx], initIdx);
	initControls();

	/**
	 * *INIT AUDIO
	 */
	// Track info
	let trackSrc = getAUD('trackSrc');
	let duration = getAUD('duration');
	let ended = getAUD('ended');
	// Controls
	let paused = getAUD('paused');
	// let playing = derived(paused, ($paused) => !$paused);
	let playbackRate = getAUD('playbackRate');
	let volume = getAUD('volume');
	let muted = getAUD('muted');

	onMount(() => {
		audio.onloadedmetadata = () => {
			set(duration, audio?.duration);
		};
	});

	// const loadTrack = () => {
	// 	updateFile(audioData, $trackIdx);
	// 	$currFile.onloadedmetadata = () => {
	// 		totalTrackTime.set($currFile.duration);
	// 		updateTime();
	// 	};
	// 	trackTitle.set(audioData[$trackIdx].name);
	// };

	// const autoPlayNextTrack = () => {
	// 	if ($loopOn) {
	// 		loadTrack();
	// 		$currFile.play();
	// 	} else if ($trackIdx <= audioData.length - 1) {
	// 		incr(trackIdx, 1);
	// 		loadTrack();
	// 		$currFile.play();
	// 	} else {
	// 		trackIdx.set(0);
	// 		loadTrack();
	// 		$currFile.play();
	// 	}
	// };
</script>

<section class="player_container">
	<AudioHead />
	<div class="player_body">
		<audio
			bind:volume={$volume}
			bind:duration={$duration}
			bind:muted={$muted}
			bind:paused={$paused}
			bind:ended={$ended}
			bind:playbackRate={$playbackRate}
			bind:this={audio}
			src={$trackSrc}
			style="display: none;"
		/>
		<Slider />
		<Controls />
		<Tracklist trackList={audioData} />
	</div>
</section>

<style lang="scss">
	.player_container {
		width: 100%;
		max-width: 800px;
		border: 1px solid var(--textFade);
		border-top-left-radius: 0.6rem;
		border-top-right-radius: 0.6rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
		.player_body {
			background: var(--player2);
		}
	}
</style>
