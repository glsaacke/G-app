import { t as dynamic_private_env } from "../../../../chunks/config.js";
import { neon } from "@neondatabase/serverless";
//#region .svelte-kit/generated/build/env/private/server.js
var DATABASE_URL = dynamic_private_env.DATABASE_URL;
//#endregion
//#region src/lib/server/exercises.ts
async function getExercises() {
	return neon(DATABASE_URL)`SELECT * FROM "Exercises"`;
}
//#endregion
//#region src/routes/api/exercises/+server.ts
var GET = async () => {
	try {
		return Response.json(await getExercises());
	} catch (error) {
		console.error("Failed to fetch exercises", error);
		return Response.json({ error: "Failed to fetch exercises" }, { status: 500 });
	}
};
//#endregion
export { GET };

//# sourceMappingURL=_server.ts.js.map