<script>
	import { NavPages } from '$lib/config';
	import NavItem from './NavItem.svelte';
</script>

<nav class="app_navlist">
	<ul>
		{#each NavPages as { href, title }}
			<NavItem {href}>
				{title}
			</NavItem>
		{/each}
	</ul>
</nav>
