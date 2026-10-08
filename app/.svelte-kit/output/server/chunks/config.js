import { defineEnvVars } from "@sveltejs/kit/env";
import { handle_issues, validate } from "@sveltejs/kit/internal/env";
//#region src/env.ts
var variables = defineEnvVars({ DATABASE_URL: { description: "Connection string for the Neon PostgreSQL database." } });
//#endregion
//#region .svelte-kit/generated/build/env/config.js
var issues = {};
var dynamic_private_env = {};
var explicit_public_env = {};
var rendered_env = {};
handle_issues(issues);
function set_env(env) {
	const issues = {};
	dynamic_private_env.DATABASE_URL = validate(variables, env.DATABASE_URL, "DATABASE_URL", issues);
	handle_issues(issues);
}
//#endregion
export { variables as a, set_env as i, explicit_public_env as n, rendered_env as r, dynamic_private_env as t };

//# sourceMappingURL=config.js.map