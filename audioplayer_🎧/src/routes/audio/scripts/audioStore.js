// @ts-nocheck
import { get, writable } from 'svelte/store';
import { incr, toggle } from './audioHelpers';

/**
 * *AUDIO PROPS
 */
// let placeHolderURL = `https://open.acast.com/public/streams/62bb6cbc21e4cb001212c5e7/episodes/62bb8a0d9b4a570012f9af74.mp3`;
export const trackIdx = writable(0);
export const trackTitle = writable('');
export const currFile = writable(0);

export const updateFile = (data, idx) => {
	currFile.set(new Audio(data[idx].url));
};
/**
 * *SLIDER
 */
export const totalTrackTime = writable(0);
export const totalTimeDisplay = writable('Loading...');
export const currTimeDisplay = writable('0:00:00');

export const loadMeta = (file) => {
	file.onloadedmetadata = () => {
		totalTrackTime.set(file.duration);
		console.log(get(totalTrackTime));
		// updateTime();
	};
};

/**
 * *CONTROLS
 */
export const speeds = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75];
export const isPlaying = writable(false);
export const loopOn = writable(false);
export const speedIdx = writable(3);
export const speed = writable(1);

export const togglePlay = () => toggle(isPlaying);
export const toggleLoop = () => toggle(loopOn);
export const toggleSpeed = () => {
	let sIdx = get(speedIdx);
	if (sIdx === speeds.length - 1) {
		speedIdx.set(0);
	} else {
		incr(speedIdx, 1);
	}
	speed.set(speeds[get(speedIdx)]);
};
