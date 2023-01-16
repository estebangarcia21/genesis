import type { Model } from 'src/routes/dashboard/prisma/types';
import { writable } from 'svelte/store';

export const parsedASTModels = writable<Model[] | null>(null);
