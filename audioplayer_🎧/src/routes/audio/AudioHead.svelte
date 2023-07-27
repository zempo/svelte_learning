<script>
	// @ts-nocheck
	import { getAUD, toggle } from './context/audioContext.js';

	// import { trackTitle } from './scripts/audioStore.js';
	import { downloadIcon, muteIcon, transcriptIcon, volumeIcon } from './scripts/icons.js';

	let volume = getAUD('volume');
	let muted = getAUD('muted');
	let trackTitle = getAUD('trackTitle');
	let trackSrc = getAUD('trackSrc');
	// let trackDownload = getAUD('trackDownload');
	const toggleVolume = () => toggle(muted);
	const downloadFile = () => {
		console.log($trackSrc);
		// https://www.sitepoint.com/community/t/javascript-file-download/3854/2
	};
</script>

<div class="audio_header">
	<h3>
		{$trackTitle}
		<!-- {$trackDownload} -->
	</h3>
	<div class="head_controls">
		<button
			class={`vol_btn ${$muted ? 'muted' : ''}`}
			on:click={toggleVolume}
			title={`${$muted ? 'Unmute' : 'Mute'}`}
		>
			{#if $muted}
				{@html muteIcon}
			{:else}
				{@html volumeIcon}
			{/if}
		</button>
		<button class="transcript_btn">
			{@html transcriptIcon}
		</button>
		<button title="Download Track" class="download_btn" on:click={downloadFile}>
			{@html downloadIcon}
		</button>
	</div>
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
		.head_controls {
			display: flex;
			align-items: center;
			.download_btn,
			.vol_btn,
			.transcript_btn {
				display: block;
				background-color: var(--player2);
				border: 1px solid var(--textFade);
				padding: 0.2rem;
				border-radius: 0.2rem;
				margin: 0 0.25rem;
				cursor: pointer;
			}
		}
	}
</style>
