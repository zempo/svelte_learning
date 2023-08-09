<script>
	import { getTopIcon } from '$lib/assets/js/siteHelpers';
	import { currPg } from '$lib/assets/js/siteStore';

	export let href;

	$: isCurrPg = href === '/' ? $currPg === '/' : $currPg.startsWith(href);
</script>

<li class={`nav_link ${href === `/` ? `home` : href.substring(1)}_link`}>
	<a {href} class:active={isCurrPg} aria-current={isCurrPg ? 'page' : false}>
		{@html getTopIcon(href)}
		<slot />
	</a>
</li>
