<script>
	import {
		backBtn,
		fwdBtn,
		pauseBtn,
		playBtn,
		playbackHorse,
		playbackRocket,
		playbackRun,
		playbackSnail,
		playbackSprint,
		playbackTurtle,
		playbackWalk
	} from './scripts/icons';
</script>

<div class="player_controls">
	{@html backBtn}
	{@html playBtn}
	{@html pauseBtn}
	{@html fwdBtn}
	{@html playbackSnail +
		playbackTurtle +
		playbackWalk +
		playbackRun +
		playbackSprint +
		playbackHorse +
		playbackRocket}
</div>

<style lang="scss">
	.player_controls {
		padding: 0.75rem 2rem;
		border: 1px solid green;
		display: flex;
		justify-content: center;
		max-width: 100%;
	}
</style>
