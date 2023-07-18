<script>
	import { backBtn, fwdBtn, pauseBtn, playBtn } from './icons';
</script>

<div class="player_controls">
	{@html backBtn}
	{@html playBtn}
	{@html pauseBtn}
	{@html fwdBtn}
</div>

<style lang="scss">
	.player_controls {
		border: 1px solid green;
	}
</style>
