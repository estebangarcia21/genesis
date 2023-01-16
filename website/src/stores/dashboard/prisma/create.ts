import type { Model } from 'src/routes/dashboard/mongodb/types';
import { writable } from 'svelte/store';

export const parsedASTModels = writable<Model[] | null>(null);
