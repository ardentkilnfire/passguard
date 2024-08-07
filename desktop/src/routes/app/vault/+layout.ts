import type { VaultItem } from '$lib/types';
import { v4 as v4uuid } from 'uuid';

//  TODO: Implement Actual system to fetch and store data via backend

export function load() {
	const items = [
		{ name: 'Discord', url: 'https://discord.com/app', tag: 'Social Media' },
		{ name: 'Google', url: 'https://google.com', tag: 'Utility' },
		{ name: 'Facebook', url: 'https://facebook.com', tag: 'Social Media' },
		{ name: 'Twitter', url: 'https://twitter.com' },
		{ name: 'GitHub', url: 'https://github.com', tag: 'Work' },
		{ name: 'LinkedIn', url: 'https://linkedin.com', tag: 'Work' },
		{ name: 'Instagram', url: 'https://instagram.com', tag: 'Social Media' },
		{ name: 'Reddit', url: 'https://reddit.com', tag: 'Entertainment' },
		{ name: 'Twitch', url: 'https://twitch.tv' },
		{ name: 'Pinterest', url: 'https://pinterest.com', tag: 'Social Media' },
		{ name: 'Spotify', url: 'https://spotify.com', tag: 'Entertainment' },
		{ name: 'YouTube', url: 'https://youtube.com' },
		{ name: 'TikTok', url: 'https://tiktok.com', tag: 'Entertainment' },
		{ name: 'Snapchat', url: 'https://snapchat.com', tag: 'Social Media' },
		{ name: 'WhatsApp', url: 'https://whatsapp.com' }
	];

	const itemsWithUuid: VaultItem[] = items.map((item) => ({
		...item,
		id: v4uuid()
	}));

	return {
		vaultItems: itemsWithUuid
	};
}
