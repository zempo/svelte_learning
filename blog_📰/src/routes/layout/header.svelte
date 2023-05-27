<script>
	import * as config from '$lib/config';
	import Toggle from './toggle.svelte';
</script>

<nav>
	<a href="/">
		<b>{config.title}</b>
	</a>

	<ul class="links">
		{#each config.routes as R}
			<li>
				{#if R.title === 'RSS'}
					<a href={R.url} target="_blank">{R.title}</a>
				{:else}
					<a href={R.url}>{R.title}</a>
				{/if}
			</li>
		{/each}
	</ul>

	<Toggle />
</nav>

<style>
	nav {
		padding-block: var(--size-7);
	}

	.links {
		margin-block: var(--size-7);
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media (min-width: 786px) {
		nav {
			display: flex;
			justify-content: space-between;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}
	}
</style>
