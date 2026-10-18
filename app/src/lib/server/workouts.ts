import { DATABASE_URL } from '$app/env/private';
import { neon } from '@neondatabase/serverless';

const sql = neon(DATABASE_URL);

export async function getExercises() {
	return await sql`SELECT * FROM "Exercises"`;
}

export async function getWorkoutWeek() {}

export async function createWorkoutWeek(){
	generateWorkoutWeek();


}

async function generateWorkoutWeek() {
	const exercises = await getExercises();
	console.log(exercises);
}
