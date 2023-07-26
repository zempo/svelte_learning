<script>
	// import { setContext } from 'svelte';
	// import { writable } from 'svelte/store';

	// import { count } from '../assets/js/store.js';
	// let count = writable(0);
	// setContext('count', count);
	// export let count = 0;

	import { setCount, getCount } from './context/context';

	setCount();
	const count = getCount('count');

	const updateCount = (evt) => {
		evt.deltaY < 0 ? ($count += 1) : ($count -= 1);
	};

	const clearCount = () => {
		count.set(0);
	};
</script>

<div on:mousewheel={updateCount} class="container">
	<p>Grandparent: {$count}</p>

	<label for="reset" />
	<input type="checkbox" role="switch" name="reset" on:change={clearCount} />
	<slot />
</div>
