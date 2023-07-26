<script>
	import { onMount } from 'svelte';
	import { getPlaybackSpeed } from './scripts/audioHelpers';
	import { backBtn, fwdBtn, pauseBtn, playBtn, repeatBtn, repeatBtnOn } from './scripts/icons';

	let isPlaying = false;
	let loopOn = false;
	let speedIdx = 3;
	let speed = 1;

	onMount(() => {
		// speed = 1
	});

	const togglePlaying = () => {
		isPlaying = !isPlaying;
	};

	const toggleSpeed = () => {
		let speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75];
		if (speedIdx === speeds.length - 1) {
			speedIdx = 0;
		} else {
			speedIdx += 1;
		}
		speed = speeds[speedIdx];
	};

	const toggleLoop = () => {
		loopOn = !loopOn;
	};
</script>

<div class="player_controls">
	<div class="control_grp left">
		<button
			class={`repeat_btn ${loopOn ? 'loop_on' : 'loop_off'}`}
			on:click={toggleLoop}
			title="Loop Track"
		>
			{#if loopOn}
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
		<button class="play_btn" on:click={togglePlaying}>
			{#if isPlaying}
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
		<button class="speed_btn" on:click={toggleSpeed} title="Playback Speed">
			{@html getPlaybackSpeed(speed)}
			<span class="speed_label">
				{speed}x
			</span>
		</button>
	</div>
</div>

<style lang="scss">
	.player_controls {
		padding: 0.75rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		max-width: 100%;
		.control_grp {
			display: flex;
			align-items: center;
			justify-content: center;
			margin: auto 0;
			// .left {
			// }
			.repeat_btn {
				width: 3.25rem;
				height: 2.5rem;
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
				width: 3.25rem;
				height: 2.5rem;
				cursor: pointer;
				.speed_label {
					display: block;
					font-weight: bolder;
				}
			}
		}
	}
</style>
