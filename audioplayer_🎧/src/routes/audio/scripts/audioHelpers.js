// @ts-nocheck
/* eslint-disable no-unused-vars */
import {
	playbackHorse,
	playbackRocket,
	playbackRun,
	playbackSnail,
	playbackSprint,
	playbackTurtle,
	playbackWalk
} from './icons';

export const toggle = (store) => {
	store.update((s) => !s);
};

export const incr = (store, val) => {
	store.update((s) => s + val);
};

export const decr = (store, val) => {
	store.update((s) => s - val);
};

// @ts-nocheck
export const toHHMMSS = (sec_num) => {
	if (isNaN(sec_num)) {
		return NaN;
	}

	sec_num = Math.floor(sec_num);
	const hours = Math.floor(sec_num / 3600);
	const minutes = Math.floor(sec_num / 60) % 60;
	const seconds = sec_num % 60;

	return [hours, minutes, seconds]
		.map((v) => (v < 10 ? '0' + v : v))
		.filter((v, i) => v !== '00' || i > 0)
		.join(':');
};

export const getPlaybackSpeed = (speed) => {
	let icon;
	switch (speed) {
		case 0.25:
			icon = playbackSnail;
			break;
		case 0.5:
			icon = playbackTurtle;
			break;
		case 0.75:
			icon = playbackWalk;
			break;
		case 1:
			icon = playbackRun;
			break;
		case 1.25:
			icon = playbackSprint;
			break;
		case 1.5:
			icon = playbackHorse;
			break;
		case 1.75:
			icon = playbackRocket;
			break;
		default:
			icon = playbackRun;
			break;
	}
	return icon;
};
