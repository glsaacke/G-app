

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CrMkf6J5.js","_app/immutable/chunks/BIqnDU1-.js"];
export const stylesheets = ["_app/immutable/assets/0.BPXihpwO.css"];
export const fonts = [];
