<script>
	import '@picocss/pico';
	import '../lib/assets/scss/Global.scss';

	import Child from '../lib/components/Child.svelte';
	import GrandParent from '../lib/components/GrandParent.svelte';
	import Parent from '../lib/components/Parent.svelte';

	// let count = 0;
</script>

<main class="container">
	<h1>Context & Store</h1>
	<GrandParent>
		<Parent>
			<Child />
		</Parent>
	</GrandParent>
	<!-- *STORES ARE GREAT! However, you run into issues when you
        *have multiple component instances sharing the same store -->
	<hr />
	<GrandParent>
		<Parent>
			<Child />
		</Parent>
	</GrandParent>
</main>

<!-- *CLASSIC DATA BINDING / PROPS -->
<!-- <GrandParent bind:count>
	<Parent {count}>
		<Child {count} />
	</Parent>
</GrandParent> -->
