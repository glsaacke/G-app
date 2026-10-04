

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.qMpxUK2X.js","_app/immutable/chunks/BIqnDU1-.js","_app/immutable/chunks/gIgZj5XL.js","_app/immutable/entry/payload.DSmR2FwN.js"];
export const stylesheets = [];
export const fonts = [];
