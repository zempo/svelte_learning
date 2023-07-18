<script>
	import '$lib/scss/global.scss';
	import AudioPlayer from './audio/AudioPlayer.svelte';
	import { audioData } from './audio/data';
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
