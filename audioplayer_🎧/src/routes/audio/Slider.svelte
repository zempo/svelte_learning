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

<input type="range" name="track_progress" id="track_progress" bind:value={progress} />

<style lang="scss">
	input[type='range'] {
		accent-color: var(--playerPrimary);
	}
</style>
