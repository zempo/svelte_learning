<script>
	// @ts-nocheck
	// import { getContext, setContext } from 'svelte';

	import { toggle, set, incr, getAUD, speeds } from './context/audioContext';
	import { getPlaybackSpeed } from './scripts/audioHelpers';
	import { backBtn, fwdBtn, pauseBtn, playBtn, repeatBtn, repeatBtnOn } from './scripts/icons';

	let loopOn = getAUD('loopOn');
	let paused = getAUD('paused');
	let playing = getAUD('playing');
	let playbackRate = getAUD('playbackRate');
	let playbackIdx = getAUD('playbackIdx');

	const toggleLoop = () => toggle(loopOn);
	const togglePlay = () => toggle(paused);
	const togglePlayback = () => {
		if ($playbackIdx === speeds.length - 1) {
			set(playbackIdx, 0);
		} else {
			incr(playbackIdx, 1);
		}
		set(playbackRate, speeds[$playbackIdx]);
	};
</script>

<div class="player_controls">
	<div class="control_grp left">
		<button
			class={`repeat_btn ${$loopOn ? 'loop_on' : 'loop_off'}`}
			on:click={toggleLoop}
			title="Loop Track"
		>
			{#if $loopOn}
				{@html repeatBtnOn}
			{:else}
				{@html repeatBtn}
			{/if}
		</button>
	</div>
	<div class="control_grp middle">
		<button class="back_btn" title="Back 10 secs">
			{@html backBtn} 10
		</button>
		<button class="play_btn" on:click={togglePlay}>
			{#if $playing}
				{@html pauseBtn}
			{:else}
				{@html playBtn}
			{/if}
		</button>
		<button class="fwd_btn" title="FFwd 10 secs">
			10 {@html fwdBtn}
		</button>
	</div>
	<div class="control_grp right">
		<button class="speed_btn" on:click={togglePlayback} title="Playback Speed">
			{@html getPlaybackSpeed($playbackRate)}
			<span class="speed_label">
				{$playbackRate}x
			</span>
		</button>
	</div>
</div>

<style lang="scss">
	.player_controls {
		padding: 0.75rem 0.25rem;
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 100%;
		margin-bottom: 0.5rem;
		.control_grp {
			display: flex;
			align-items: center;
			justify-content: center;
			// .left {
			// }
			.repeat_btn {
				background: var(--playerBtnBgd);
				border: 1px solid var(--playerBtnBgd);
				border-radius: 0.3rem;
				cursor: pointer;
			}
			.back_btn,
			.fwd_btn {
				display: flex;
				width: 3.5rem;
				margin: auto 0.25rem;
				justify-content: space-between;
				align-items: center;
				font-weight: bolder;
				background: none;
				border: none;
				color: var(--player3);
				cursor: pointer;
			}
			.play_btn {
				padding: 0.3rem;
				border-radius: 50%;
				border: 1px solid var(--playerBtnBgd);
				background: var(--playerBtnBgd);
				cursor: pointer;
			}
			.speed_btn {
				padding: 0.25rem 0.5rem;
				border-radius: 0.3rem;
				background-color: var(--playerBtnBgd);
				color: var(--player5);
				border: 1px solid var(--playerBtnBgd);
				cursor: pointer;
				.speed_label {
					display: block;
					font-weight: bolder;
				}
			}
		}
	}
</style>
