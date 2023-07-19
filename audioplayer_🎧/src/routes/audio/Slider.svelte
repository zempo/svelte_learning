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
		padding: 0.75rem 2rem;
		border: 1px solid red;
		input[type='range'] {
			width: 100%;
			accent-color: var(--playerPrimary);
		}
	}
</style>
