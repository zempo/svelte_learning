// @ts-nocheck
import { getContext, setContext } from 'svelte';
import { derived, writable } from 'svelte/store';
// import { toggle } from '../scripts/audioHelpers';
// import { incr, toggle } from '../scripts/audioHelpers';

/**
 * *GET/SET
 */
export const getAUD = (KEY) => {
	return getContext(KEY);
};

export const toggle = (store) => {
	store.update((s) => !s);
};

export const set = (store, val) => {
	store.set(val);
};

export const incr = (store, val) => {
	store.update((s) => s + val);
};

export const decr = (store, val) => {
	store.update((s) => s - val);
};

/**
 * *AUDIO PROPS
 */
// let placeHolderURL = `https://open.acast.com/public/streams/62bb6cbc21e4cb001212c5e7/episodes/62bb8a0d9b4a570012f9af74.mp3`;

export const initFile = (currItem, initial) => {
	let trackIdx = writable(initial);
	let trackTitle = writable(currItem.name);
	let trackSrc = writable(currItem.url);
	let duration = writable(0);
	let ended = writable(false);
	// Tracklist / Transcript / Download
	let trackDownload = writable(false);
	let tracklistOpen = writable(false);

	setContext('trackIdx', trackIdx);
	setContext('trackTitle', trackTitle);
	setContext('trackSrc', trackSrc);
	setContext('duration', duration);
	setContext('ended', ended);
	setContext('trackDownload', trackDownload);
	setContext('tracklistOpen', tracklistOpen);
};

/**
 * *CONTROLS
 */
export const speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75];
export const initControls = () => {
	let paused = writable(true);
	let playbackRate = writable(1);
	let playbackIdx = writable(3);
	let loopOn = writable(false);
	let muted = writable(false);
	let volume = writable(1);

	setContext('paused', paused);
	setContext('playbackIdx', playbackIdx);
	setContext('playbackRate', playbackRate);
	setContext('loopOn', loopOn);
	setContext('muted', muted);
	setContext('volume', volume);

	setContext(
		'playing',
		derived(paused, ($paused) => !$paused)
	);
};

// export const loopOn = writable(false);
// export const speedIdx = writable(3);
// export const speed = writable(1);

// export const togglePlay = () => toggle(isPlaying);
// export const toggleLoop = () => toggle(loopOn);
// export const toggleSpeed = () => {
// 	let sIdx = get(speedIdx);
// 	if (sIdx === speeds.length - 1) {
// 		speedIdx.set(0);
// 	} else {
// 		incr(speedIdx, 1);
// 	}
// 	speed.set(speeds[get(speedIdx)]);
// };
