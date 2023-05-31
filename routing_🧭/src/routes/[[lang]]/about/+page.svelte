<script>
	import PageContainer from '$lib/components/utils/PageContainer.svelte';
</script>

<PageContainer pgClass="about_pg">
	<h1>Optional Params</h1>

	Let's change up the language:

	<ul>
		<li>
			<a href="/en/about">English 🇬🇧</a>
		</li>
		<li>
			<a href="/ru/about">Russian 🇷🇺</a>
		</li>
		<li>
			<a href="/about">None</a>
		</li>
	</ul>
</PageContainer>
