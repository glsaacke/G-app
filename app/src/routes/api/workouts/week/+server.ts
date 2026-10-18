import { json } from '@sveltejs/kit';
import { getWorkoutWeek, createWorkoutWeek } from '#lib/server/workouts.js';

export async function GET(): Promise<Response> {
	return json(await getWorkoutWeek());
}

export async function POST(): Promise<Response> {
	return json(await createWorkoutWeek());
}
