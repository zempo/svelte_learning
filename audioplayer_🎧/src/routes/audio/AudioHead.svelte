<script>
	// @ts-nocheck
	import { getAUD, toggle } from './context/audioContext.js';
	import { downloadIcon, muteIcon, transcriptIcon, volumeIcon } from './scripts/icons.js';
	import { fade } from 'svelte/transition';

	// let volume = getAUD('volume');
	let muted = getAUD('muted');
	let trackTitle = getAUD('trackTitle');
	let trackSrc = getAUD('trackSrc');
	let transcript = getAUD('transcript');
	let showTranscript = getAUD('showTranscript');
	// let trackDownload = getAUD('trackDownload');
	const toggleVolume = () => toggle(muted);
	const toggleTranscript = () => toggle(showTranscript);
</script>

<div class="audio_header">
	<h3>
		{$trackTitle}
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
		<button
			class={`transcript_btn ${$showTranscript ? 'showing' : ''}`}
			title={`${$transcript.length === 0 ? 'Transcript Unavailable' : 'View Transcript'}`}
			disabled={$transcript.length === 0}
			on:click={toggleTranscript}
		>
			{@html transcriptIcon}
		</button>
		<a
			title="Download Track"
			class="download_btn"
			role="button"
			href={$trackSrc}
			target="_blank"
			rel="noopener noreferrer"
			download
		>
			{@html downloadIcon}
		</a>
	</div>
</div>

<style lang="scss">
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
			.download_btn {
				display: block;
			}
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
				&:disabled {
					opacity: 0.7;
				}
			}
		}
	}
</style>
