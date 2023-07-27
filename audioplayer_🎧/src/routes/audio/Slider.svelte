<script>
	// @ts-ignore
	let progress = 0;

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
	<input type="range" name="track_progress" id="track_progress" bind:value={progress} />
</div>

<style lang="scss">
	.slider {
		padding: 1.5rem 1.5rem 0.75rem;
		// border: 1px solid red;
		max-width: 40rem;
		margin: auto;
		input[type='range'] {
			width: 100%;
			margin: auto;
			accent-color: var(--player3);
		}
	}
</style>
