<script>
	// @ts-nocheck
	import {
		trackIdx,
		trackTitle,
		currFile,
		loopOn,
		updateFile,
		totalTrackTime,
		loadMeta
	} from './scripts/audioStore';
	import { incr } from './scripts/audioHelpers';
	import { onMount } from 'svelte';

	import AudioHead from './AudioHead.svelte';
	import Controls from './Controls.svelte';
	import Tracklist from './Tracklist.svelte';
	import Slider from './Slider.svelte';

	import { get } from 'svelte/store';

	export let audioData;

	// Get Audio track
	trackTitle.set(audioData[$trackIdx].name);
	onMount(() => {
		// currFile.set(new Audio(audioData[$trackIdx].url));
		updateFile(audioData, $trackIdx);
		loadMeta($currFile);
		// console.log(get(currFile));
	});

	const loadTrack = () => {
		updateFile(audioData, $trackIdx);
		$currFile.onloadedmetadata = () => {
			totalTrackTime.set($currFile.duration);
			updateTime();
		};
		trackTitle.set(audioData[$trackIdx].name);
	};

	const autoPlayNextTrack = () => {
		if ($loopOn) {
			// loop curr track
			loadTrack();
			$currFile.play();
		} else if ($trackIdx <= audioData.length - 1) {
			incr(trackIdx, 1);
			loadTrack();
			$currFile.play();
		} else {
			trackIdx.set(0);
			loadTrack();
			$currFile.play();
		}
	};
</script>

<section class="player_container">
	<AudioHead />
	<div class="player_body">
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
