import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

/**
 * ! If you are using Threlte with SvelteKit, adapt your Vite configuration
 * ! to prevent three from being externalized for SSR by vites externalization step
 */
export default defineConfig({
	plugins: [sveltekit()],
	ssr: {
		noExternal: ['three', 'troika-three-text']
	}
});
