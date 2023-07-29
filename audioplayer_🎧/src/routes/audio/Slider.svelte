<script>
	// @ts-ignore
	import { getAUD } from './context/audioContext';
	import { toHHMMSS } from './scripts/audioHelpers';

	let trackTimeStamps = getAUD('trackTimeStamps');
	let currentTime = getAUD('currentTime');
	let duration = getAUD('duration');
	let ratio = getAUD('ratio');
	let min = 0;
</script>

<div class="slider">
	<div class="time_disp">
		<span>{toHHMMSS($currentTime)}</span>
		<span>{toHHMMSS($duration)}</span>
	</div>
	<label for="track_progress" class="timestamps">
		{#each $trackTimeStamps as T}
			<span
				class="time_stamp"
				style={`visibility: ${$duration > 0 ? 'visible' : 'hidden'};left: ${$ratio * T.start}%`}
				>{T.label}</span
			>
		{/each}
		<input
			type="range"
			name="track_progress"
			id="track_progress"
			{min}
			max={$duration}
			bind:value={$currentTime}
		/>
	</label>
</div>

<style lang="scss">
	.slider {
		padding: 1.5rem 1.5rem 0.75rem;
		// border: 1px solid red;
		max-width: 40rem;
		margin: auto;
		margin-bottom: 1rem;
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
		.timestamps {
			width: 100%;
			position: relative;
			.time_stamp {
				color: var(--player4);
				font-weight: bold;
				position: absolute;
				bottom: -1rem;
				font-size: medium;
				&::before {
					content: '';
					width: 1px;
					height: 0.75rem;
					position: absolute;
					background: var(--player4);
					border: 0.01rem solid var(--player4);
					border-radius: 0.1rem;
					left: 50%;
					top: -1rem;
				}
			}
			input[type='range'] {
				width: 100%;
				margin: auto;
				accent-color: var(--player3);
			}
		}
	}
</style>
