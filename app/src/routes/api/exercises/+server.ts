import type { RequestHandler } from './$types';
import { getExercises } from '#lib/server/exercises.js';

export const GET: RequestHandler = async () => {
	try {
		return Response.json(await getExercises());
	} catch (error) {
		console.error('Failed to fetch exercises', error);
		return Response.json({ error: 'Failed to fetch exercises' }, { status: 500 });
	}
};