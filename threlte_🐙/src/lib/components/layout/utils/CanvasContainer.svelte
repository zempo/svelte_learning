<script>
	import { Canvas } from '@threlte/core';
</script>

<div class="scene">
	<Canvas>
		<!-- Insert Cool, 3d Scene here -->
		<slot />
	</Canvas>
</div>

<style lang="scss">
	.scene {
		width: 100%;
		height: 100%;
		position: absolute;
		inset: 0;
		background: transparent;
		background-attachment: fixed;
	}
</style>
