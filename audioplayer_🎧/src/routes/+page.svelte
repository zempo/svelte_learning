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

	<button on:click={toggleMode}>Toggle Theme</button>
	<hr />
	<div class="content_box">
		<h2>Custom Audio Player</h2>
		<AudioPlayer {audioData} />
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti esse iure eum ab voluptatum
			asperiores aperiam dolores hic pariatur, corporis nostrum dignissimos cum. Alias repellat vel
			fugiat doloremque eos enim temporibus eum iusto et nihil ea earum, nemo inventore eius culpa
			ipsam eaque reprehenderit, at iste numquam? Pariatur, reiciendis itaque unde aspernatur
			obcaecati quo! Optio numquam esse officia et soluta.
		</p>
		<p>
			Dignissimos ipsa obcaecati natus eaque nulla quibusdam vitae quasi necessitatibus ducimus vel
			ullam neque, at quidem dolorem provident aliquam, totam ea minima laudantium, esse amet
			molestias? Quidem aut, ipsa dolore nobis fugiat voluptatibus totam vel accusantium nihil
			molestias. Fuga exercitationem quae adipisci. Ullam consequatur in voluptates, dolores
			suscipit provident! Quasi facilis, voluptas magni molestiae dolor perferendis officia,
			quibusdam cupiditate fugit atque optio ipsam.
		</p>
	</div>

	<div class="content_box">
		<p>
			Augue magna gravida nulla tortor enim sit. Consectetur cum auctor erat magnis tempus placerat.
			Proin urna viverra porta mollis class phasellus. Phasellus felis tincidunt suscipit himenaeos
			sociosqu justo hac etiam maecenas elementum. Potenti egestas, justo justo arcu a risus tempus
			velit! Adipiscing ut at facilisis, congue luctus viverra vehicula nec. Lorem senectus magnis
			imperdiet venenatis curabitur. Eros interdum sociis aptent nibh convallis viverra potenti
			scelerisque ridiculus natoque lorem. Ridiculus mattis ad class adipiscing sodales ut hendrerit
			vivamus! Odio mauris blandit dapibus potenti eu tortor adipiscing adipiscing tincidunt? Mus,
			quam ultrices netus morbi hendrerit hendrerit ligula consequat posuere. Purus leo porttitor
			eget etiam tempor nostra? Quam interdum placerat facilisi dui ac vehicula, a egestas. Cras
			diam eros augue dis praesent dictumst eu penatibus! Volutpat augue imperdiet est, praesent
			tincidunt pharetra cras. Ultricies ad bibendum neque varius at penatibus. Litora sed aliquam
			vitae in.
		</p>
		<p>
			Sapien a neque ad tortor justo natoque posuere torquent placerat posuere. Metus luctus nisl
			habitant conubia dictum justo. Est ante malesuada tortor primis, lobortis taciti fusce felis.
			Adipiscing mauris ipsum, lobortis natoque velit. Consectetur platea euismod dictumst
			suspendisse. Cras massa pulvinar curabitur erat class fringilla. Mollis hendrerit, at sodales.
			Lectus malesuada conubia condimentum suspendisse, imperdiet elit. Fermentum neque mus eleifend
			malesuada sodales.
		</p>
		<p>
			Cursus amet, natoque rhoncus velit platea hac nulla dui et diam! Dolor condimentum luctus nec
			quisque? Ac quisque bibendum, cum tortor. Felis ornare, felis habitant sit ut lorem luctus
			litora dui felis phasellus. Quisque vestibulum non quisque, imperdiet nisl velit. Urna urna
			vulputate odio magna luctus. Conubia facilisis est purus diam dolor at venenatis lorem
			penatibus. Adipiscing habitasse quisque lacus curabitur. Himenaeos aptent pharetra nibh sociis
			mattis pulvinar urna turpis nisl proin. Convallis quam; litora magna non luctus magna. Platea
			amet fames odio a. Sem pretium ad vestibulum accumsan pretium habitant vestibulum senectus
			tortor eleifend quam conubia. Congue ante nulla, faucibus lacus pellentesque vehicula.
			Condimentum magnis sapien, mi orci consectetur cursus. Aliquet platea per fringilla gravida
			natoque rhoncus.
		</p>
		<p>
			Vel dapibus est cras molestie. Cum consectetur curabitur senectus congue euismod cum et erat
			eros nisi montes. Dis morbi morbi sociis nunc fusce pulvinar! Magna tellus primis lacus
			curabitur torquent blandit. Tempor sociis habitant placerat eget in potenti potenti duis in.
			Ultrices euismod augue condimentum aptent arcu lacinia, dolor nascetur. Dapibus praesent
			pharetra nascetur id. Nullam vestibulum tempor praesent potenti condimentum phasellus diam
			cubilia potenti conubia inceptos. Dictum scelerisque taciti, turpis id integer. Ipsum
			condimentum justo commodo proin orci malesuada. Congue feugiat taciti malesuada! Pulvinar hac
			congue enim natoque iaculis quis semper. Fermentum ultricies et conubia justo dui cursus
			fermentum dui mattis fermentum scelerisque eget. Sociis vehicula integer accumsan elit
			venenatis sociosqu torquent vel lacus. Congue leo per egestas mollis?
		</p>
		<p>
			Netus ligula purus placerat porttitor. Inceptos lectus mus sociis penatibus nostra himenaeos!
			Dictumst at vestibulum ridiculus mollis montes sodales felis porta. Adipiscing taciti elit est
			neque pellentesque pretium. Tempus lectus ultricies hendrerit sollicitudin rutrum lacinia nisl
			ridiculus. Euismod sodales primis sem sem facilisis, ultrices phasellus nisi ornare? Tortor
			cum leo molestie sodales aliquet cras ac hac? Bibendum potenti phasellus metus semper. Etiam
			porttitor congue pharetra ipsum lacus hendrerit cras per! Urna phasellus semper egestas
			accumsan ligula venenatis accumsan imperdiet ad litora montes nunc! Lacinia accumsan pretium
			sit curabitur tortor? Fringilla tempor rhoncus mauris primis ultrices. Sapien montes
			consectetur ipsum sit aliquam viverra semper etiam pulvinar. Arcu commodo fames massa viverra
			etiam rutrum varius. Odio vitae.
		</p>
	</div>
</main>

<style lang="scss">
	main {
		width: 95vw;
		max-width: 1200px;
		margin: auto;
		.content_box h2 {
			text-align: center;
		}
	}
</style>
