<script>
	// @ts-nocheck

	import { trackTitle } from './scripts/audioStore.js';
	import { downloadIcon } from './scripts/icons.js';
</script>

<div class="audio_header">
	<h3>{$trackTitle}</h3>
	<button title="Download Track" class="download_btn">
		{@html downloadIcon}
	</button>
</div>

<style lang="scss">
	/* @import "lib/assets/scss/..." */
	.audio_header {
		background: var(--player1);
		border-top-left-radius: 0.6rem;
		border-top-right-radius: 0.6rem;
		color: var(--player6);
		text-align: center;
		// line-height: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.75rem;
		h3 {
			margin: 0;
		}
		.download_btn {
			background-color: var(--player2);
			border: 1px solid var(--textFade);
			padding: 0.2rem;
			border-radius: 0.2rem;
			cursor: pointer;
		}
	}
</style>
