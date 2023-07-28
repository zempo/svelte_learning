<script>
	// @ts-ignore
	import { getAUD } from './context/audioContext';
	import { toHHMMSS } from './scripts/audioHelpers';

	let currentTime = getAUD('currentTime');
	let duration = getAUD('duration');
	let min = 0;

	export let trackData = {
		duration: 30
	};

	export const updateProgress = () => {
		// @ts-ignore
		console.log(progress);
		// audioFile.currentTime * (100 / totalTrackTime)
		// `${(progressBar.current.value / duration) * 100}%`
		// progress += 10;
	};
</script>

<div class="slider">
	<div class="time_disp">
		<span>{toHHMMSS($currentTime)}</span>
		<span>{toHHMMSS($duration)}</span>
	</div>
	<input
		type="range"
		name="track_progress"
		id="track_progress"
		{min}
		max={$duration}
		bind:value={$currentTime}
	/>
</div>

<style lang="scss">
	.slider {
		padding: 1.5rem 1.5rem 0.75rem;
		// border: 1px solid red;
		max-width: 40rem;
		margin: auto;
		.time_disp {
			width: 100%;
			margin: auto;
			display: flex;
			justify-content: space-between;
			span {
				color: var(--player3);
				line-height: 1.75;
				font-weight: bold;
			}
		}
		input[type='range'] {
			width: 100%;
			margin: auto;
			accent-color: var(--player3);
		}
	}
</style>
