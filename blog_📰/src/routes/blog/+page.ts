import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const postRes = await fetch('api/posts');
	const posts: Post[] = await postRes.json();
	return { posts };
}

// export const load = async ({ url, fetch }) => {
// 	const postRes = await fetch(`${url.origin}/api/posts.json`);
// 	const posts = await postRes.json();

// 	const totalRes = await fetch(`${url.origin}/api/posts/count`);
// 	const total = await totalRes.json();

// 	return { posts, total };
// };
