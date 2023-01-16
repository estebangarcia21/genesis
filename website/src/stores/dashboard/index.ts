import { writable } from 'svelte/store';

export const activeBuilder = writable<string | null>();
