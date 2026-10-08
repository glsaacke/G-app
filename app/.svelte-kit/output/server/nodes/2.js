

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BK2sGeLM.js","_app/immutable/chunks/BIqnDU1-.js"];
export const stylesheets = ["_app/immutable/assets/2.BabeMunD.css"];
export const fonts = [];
