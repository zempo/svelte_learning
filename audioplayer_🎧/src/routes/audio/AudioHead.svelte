<script>
	// @ts-nocheck

	import { downloadIcon } from './scripts/icons.js';
	export let title;
</script>

<div class="audio_header">
	<h3>{title}</h3>
	<button title="Download Track" class="btn_download">
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
		.btn_download {
			background-color: var(--player2);
			border: 1px solid var(--textFade);
			padding: 0.2rem;
			border-radius: 0.2rem;
			cursor: pointer;
		}
	}
</style>
