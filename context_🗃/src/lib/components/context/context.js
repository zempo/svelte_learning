import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';

// **We have to scope this inside the setCount
// *- otherwise the count value is globally scoped!
// let count = writable(0);

export const setCount = () => {
	let count = writable(0);
	setContext('count', count);
};

export const getCount = () => {
	return getContext('count');
};
