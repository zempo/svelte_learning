<script>
	// @ts-nocheck
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
	let trackIdx = getAUD('trackIdx');
	let trackTitle = getAUD('trackTitle');
	let trackTimeStamps = getAUD('trackTimeStamps');
	let trackSrc = getAUD('trackSrc');
	let duration = getAUD('duration');
	let currentTime = getAUD('currentTime');
	let ended = getAUD('ended');
	// Controls
	let loopOn = getAUD('loopOn');
	let paused = getAUD('paused');
	let playbackRate = getAUD('playbackRate');
	let playbackIdx = getAUD('playbackIdx');
	let volume = getAUD('volume');
	let muted = getAUD('muted');

	onMount(() => {
		audio.onloadedmetadata = () => {
			set(duration, audio?.duration);
		};
	});

	/**
	 * *Next Track
	 */
	const loadNextTrack = (data) => {
		let len = data.length;
		/**
		 * !Exit Case
		 * */
		if (len === $trackIdx + 1) {
			set(currentTime, 0);
		} else {
			let nextTrack = data[$trackIdx + 1];
			let newIdx = $trackIdx + 1;

			// update file data
			set(trackIdx, newIdx);
			set(trackTitle, nextTrack.name);
			set(trackSrc, nextTrack.url);
			set(trackTimeStamps, nextTrack.timeStamps);
			set(playbackIdx, 3);
			set(currentTime, 0);
			set(duration, 0);
			set(ended, false);

			audio.onloadedmetadata = () => {
				set(duration, audio?.duration);
				set(paused, false);
			};
		}
	};

	const handleTrack = (e, data) => {
		// if playing, stop playing
		set(paused, true);
		// update idx, target
		let targetIdx = e.target.dataset.trackId;
		let targetTrack = data[targetIdx];
		// update file data
		set(trackIdx, Number(targetIdx));
		set(trackTitle, targetTrack.name);
		set(trackSrc, targetTrack.url);
		set(trackTimeStamps, targetTrack.timeStamps);
		set(playbackIdx, 3);
		set(currentTime, 0);
		set(duration, 0);
		set(ended, false);

		audio.onloadedmetadata = () => {
			set(duration, audio?.duration);
			set(paused, false);
		};
	};
</script>

<section class="player_container">
	<AudioHead />
	<div class="player_body">
		<audio
			bind:volume={$volume}
			bind:duration={$duration}
			bind:currentTime={$currentTime}
			bind:muted={$muted}
			bind:paused={$paused}
			bind:ended={$ended}
			on:ended={loadNextTrack(audioData)}
			bind:playbackRate={$playbackRate}
			bind:this={audio}
			src={$trackSrc}
			loop={$loopOn}
			style="display: none;"
		/>{$trackIdx}
		<Slider />
		<Controls />
		<Tracklist trackList={audioData} on:click={(e) => handleTrack(e, audioData)} />
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
