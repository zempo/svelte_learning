import { dev } from '$app/environment';

export const title = `Words, Words, Words ✍`;
export const desc = `Sveltekit blog for poets`;
export const postsPerPage = 5;
export const routes = [
	{
		title: 'About',
		url: '/about'
	},
	{
		title: 'Blog',
		url: '/blog'
	},
	{
		title: 'Contact',
		url: '/contact'
	},
	{
		title: 'RSS',
		url: '/rss.xml'
	}
];
export const url = dev ? 'http://localhost:5173' : 'blog_url';
