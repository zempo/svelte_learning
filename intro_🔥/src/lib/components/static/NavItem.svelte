<script>
	// @ts-nocheck
	import { currPg } from '$lib/assets/store';

	export let href;

	$: isCurrentPage = $currPg.startsWith(href);
</script>

<li>
	<a {href} class:active={isCurrentPage} aria-current={isCurrentPage ? 'page' : false}>
		<slot />
	</a>
</li>
