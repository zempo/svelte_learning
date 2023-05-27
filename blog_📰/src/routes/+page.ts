import type { ApiData, Post } from '$lib/types';

export async function load({ fetch }) {
	const dataRes = await fetch('api/data');
	const data: ApiData[] = await dataRes.json();

	const postRes = await fetch('api/posts');
	const posts: Post[] = await postRes.json();
	return { posts, data };
}
