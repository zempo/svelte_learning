<script>
	import { browser } from '$app/environment';
	import '$lib/scss/global.scss';
	import { onMount } from 'svelte';
	import AudioPlayer from './audio/AudioPlayer.svelte';
	import { audioData } from './audio/scripts/data';

	const themes = {
		'🌛 Night': { name: '🌛 Night', toolTip: 'Switch to Light Mode' },
		'☀️ Daylight': { name: '☀️ Daylight', toolTip: 'Switch to Dark Mode' }
	};

	// @ts-ignore
	let selectedTheme = getTheme() ?? themes['🌛 Night'];

	function getTheme() {
		if (!browser) return;

		const htmlElement = document.documentElement;
		const userTheme = localStorage.theme;
		const prefersDarkMode = window.matchMedia('prefers-color-scheme: dark').matches;
		const prefersLightMode = window.matchMedia('prefers-color-scheme: light').matches;

		// check if the user set a theme
		if (userTheme) {
			htmlElement.dataset.theme = userTheme;
			// @ts-ignore
			return themes[userTheme];
		}

		// otherwise check for user preference
		if (!userTheme && prefersDarkMode) {
			htmlElement.dataset.theme = '🌛 Night';
			localStorage.theme = '🌛 Night';
		}
		if (!userTheme && prefersLightMode) {
			htmlElement.dataset.theme = '☀️ Daylight';
			localStorage.theme = '☀️ Daylight';
		}

		// if nothing is set default to dark mode
		if (!userTheme && !prefersDarkMode && !prefersLightMode) {
			htmlElement.dataset.theme = '🌛 Night';
			localStorage.theme = '🌛 Night';
		}

		// @ts-ignore
		return themes[userTheme];
	}

	function toggleMode() {
		// $sounds.click();
		// console.log(selectedTheme);
		if (selectedTheme.name === '☀️ Daylight') {
			selectedTheme = themes['🌛 Night'];
		} else {
			selectedTheme = themes['☀️ Daylight'];
		}

		const htmlElement = document.documentElement;
		htmlElement.dataset.theme = selectedTheme.name;
		localStorage.theme = selectedTheme.name;
	}

	onMount(() => {
		selectedTheme = getTheme() ?? themes['🌛 Night'];
		if (selectedTheme.name === '☀️ Daylight') {
			selectedTheme = themes['☀️ Daylight'];
		} else {
			selectedTheme = themes['🌛 Night'];
		}
	});
</script>

<main class="container">
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse iure eum ab voluptatum
		asperiores aperiam dolores hic pariatur, corporis nostrum dignissimos cum. Alias repellat vel
		fugiat doloremque eos enim temporibus eum iusto et nihil ea earum, nemo inventore eius culpa
		ipsam eaque reprehenderit, at iste numquam? Pariatur, reiciendis itaque unde aspernatur
		obcaecati quo! Optio numquam esse officia et soluta. Dignissimos ipsa obcaecati natus eaque
		nulla quibusdam vitae quasi necessitatibus ducimus vel ullam neque, at quidem dolorem provident
		aliquam, totam ea minima laudantium, esse amet molestias? Quidem aut, ipsa dolore nobis fugiat
		voluptatibus totam vel accusantium nihil molestias. Fuga exercitationem quae adipisci. Ullam
		consequatur in voluptates, dolores suscipit provident! Quasi facilis, voluptas magni molestiae
		dolor perferendis officia, quibusdam cupiditate fugit atque optio ipsam.
	</p>
	<button on:click={toggleMode}>Toggle Theme</button>
	<hr />
	<AudioPlayer {audioData} />
</main>

<style lang="scss">
	main {
		width: 95vw;
		max-width: 1200px;
		margin: auto;
	}
</style>
