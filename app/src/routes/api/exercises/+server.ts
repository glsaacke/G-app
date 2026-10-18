import { json } from '@sveltejs/kit';
import { getExercises } from '#lib/server/workouts.js';

export async function GET(): Promise<Response> {
	return json(await getExercises());
}
