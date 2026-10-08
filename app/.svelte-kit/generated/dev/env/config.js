import { variables } from "../../../../src/env.ts";
import { validate, handle_issues } from '@sveltejs/kit/internal/env';

const issues = {};

export { variables }

export const dynamic_private_env = {};

export const explicit_public_env = {};

export const rendered_env = {};

handle_issues(issues);

export function set_env(env) {
	const issues = {};
	const DATABASE_URL = validate(variables, env.DATABASE_URL, "DATABASE_URL", issues);
	dynamic_private_env.DATABASE_URL = DATABASE_URL;
	handle_issues(issues);
}

set_env({DATABASE_URL:"postgresql://neondb_owner:npg_viGK3IqOb6zF@ep-empty-mode-b5w7pnug-pooler.c-7.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require"});