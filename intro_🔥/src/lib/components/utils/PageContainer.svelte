<script>
	// @ts-nocheck

	export let pgClass;
</script>

<section class="app_pg {pgClass ? pgClass : ''}">
	<slot>
		<h1>This is a container</h1>
		<p>We know what to do with containers... 🐱📦</p>
	</slot>
</section>

<style>
	section {
		margin: auto;
		max-width: 1200px;
		position: relative;
		padding: 5rem 1rem;
		min-height: 100vh;
	}
</style>
