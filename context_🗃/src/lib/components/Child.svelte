<script>
	import { getCount } from './context/context';

	// import { getContext } from 'svelte';

	// import { count } from '../assets/js/store.js';

	// const count = getContext('count');

	const count = getCount('count');
</script>

<div class="container">
	<p>Child: {$count}</p>
	<slot><!-- optional fallback --></slot>
</div>
