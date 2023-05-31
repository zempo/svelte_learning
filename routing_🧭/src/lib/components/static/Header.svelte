<script>
	import NavItem from './NavItem.svelte';
	import { navItems } from '$lib/config';
</script>

<header>
	<nav class="main_nav">
		<ul>
			{#each navItems as pg}
				<NavItem href={pg.path}>
					{pg.title}
				</NavItem>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.main_nav ul {
		display: flex;
		justify-content: left;
	}
</style>
