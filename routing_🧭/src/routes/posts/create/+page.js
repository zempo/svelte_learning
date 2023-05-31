import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ url }) {
	try {
		return {
			path: url.pathname
		};
	} catch (err) {
		throw error(404, { message: 'Yikes! 📣' });
	}
	// throw new Error('Yikes!');
}
