import { DATABASE_URL } from '$app/env/private';
import { neon } from '@neondatabase/serverless';

const sql = neon(DATABASE_URL);

export async function getExercises() {
	return await sql`SELECT * FROM "Exercises"`;
}