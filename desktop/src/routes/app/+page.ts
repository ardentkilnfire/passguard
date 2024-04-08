import { Routes } from '$lib/config';
import { redirect } from '@sveltejs/kit';

export function load() {
	// TODO: Implement actual system to check for profile before redirection
	redirect(301, Routes.APP_VAULT);
}
