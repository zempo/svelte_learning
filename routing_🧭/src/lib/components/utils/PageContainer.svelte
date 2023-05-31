<script>
	// @ts-nocheck

	export let pgClass;

	const goBack = () => {
		history.back();
	};
</script>

<section class="app_pg {pgClass ? pgClass : ''}">
	<slot>
		<h1>This is a container</h1>
		<p>We know what to do with containers... 🐱📦</p>
	</slot>
	<div class="btn_container">
		<button on:click={goBack}>👈 Last Pg</button>
	</div>
</section>

<style>
	section {
		margin: auto;
		max-width: 1200px;
		position: relative;
		padding-block: 2rem;
		min-height: 100vh;
	}
	.btn_container {
		width: 150px;
	}
</style>
