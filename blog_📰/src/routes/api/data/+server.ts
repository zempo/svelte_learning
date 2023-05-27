import { json } from '@sveltejs/kit';

export const prerender = true;

export const GET = () => {
	const posts = import.meta.glob(`$lib/content/posts/*.md`);
	let apiData = [
		{
			dataSet: 'Posts Data',
			count: Object.keys(posts).length
		}
	];

	return json(apiData);
};
