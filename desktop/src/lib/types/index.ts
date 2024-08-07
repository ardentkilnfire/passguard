import { Vault } from 'phosphor-svelte';

export type NavItem = {
	name: string;
	path: string;
	Icon: typeof Vault;
};

export interface VaultItem {
	id: string;
	name: string;
	url: string;
	tag?: string;
}
