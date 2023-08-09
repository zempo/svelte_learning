import { homeIcon, sceneIcon } from '$lib/components/svg/siteIcons';

export const getTopIcon = (url) => {
	if (url === '/') {
		return homeIcon;
	} else {
		return sceneIcon;
	}
};
