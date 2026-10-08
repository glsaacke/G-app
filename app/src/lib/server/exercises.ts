import { DATABASE_URL } from '$app/env/private';
import { neon } from '@neondatabase/serverless';

export async function getExercises() {
	const sql = neon(DATABASE_URL);
	return sql`SELECT * FROM "Exercises"`;
}