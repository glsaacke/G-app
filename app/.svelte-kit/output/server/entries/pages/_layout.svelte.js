import { a as attr, n as head } from "../../chunks/server.js";
//#region src/lib/assets/gIcon.png
var gIcon_default = "/_app/immutable/assets/gIcon.DCYIU7HN.png";
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	head("12qhfyh", $$renderer, ($$renderer) => {
		$$renderer.push(`<link rel="icon"${attr("href", gIcon_default)}/> <link rel="manifest" href="/manifest.webmanifest"/> <link rel="apple-touch-icon" href="/icons/gIcon-192.png"/> <meta name="theme-color" content="#373735"/> <meta name="apple-mobile-web-app-capable" content="yes"/>`);
	});
	children($$renderer);
	$$renderer.push(`<!---->`);
}
//#endregion
export { _layout as default };

//# sourceMappingURL=_layout.svelte.js.map