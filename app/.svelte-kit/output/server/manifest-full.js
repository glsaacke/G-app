export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	app_dir: "_app",
	app_path: "_app",
	assets: new Set(["icons/gIcon-192.png","icons/gIcon-512.png","manifest.webmanifest","robots.txt"]),
	mime_types: {".png":"image/png",".webmanifest":"application/manifest+json",".txt":"text/plain"},
	client: {start:"_app/immutable/entry/start.B74tgcBo.js",app:"_app/immutable/entry/app.DT9PVaFB.js",imports:["_app/immutable/entry/start.B74tgcBo.js","_app/immutable/entry/payload.DSmR2FwN.js","_app/immutable/chunks/BaNbYf_w.js","_app/immutable/chunks/hihOD2o7.js","_app/immutable/chunks/BIqnDU1-.js","_app/immutable/chunks/gIgZj5XL.js","_app/immutable/entry/app.DT9PVaFB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
	
	nodes: [
		__memo(() => import('./nodes/0.js')),
		__memo(() => import('./nodes/1.js')),
		__memo(() => import('./nodes/2.js')),
		__memo(() => import('./nodes/3.js'))
	],
	remotes: {
		
	},
	routes: [
		{
			id: "/",
			pattern: /^\/$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 2 },
			endpoint: null
		},
		{
			id: "/workouts",
			pattern: /^\/workouts\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 3 },
			endpoint: null
		}
	],
	prerendered_routes: new Set([]),
	matchers: async () => {
		return {};
	},
	server_assets: {}
}
})();
