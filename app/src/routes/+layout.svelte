<script lang="ts">
	import gIcon from '#lib/assets/gIcon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={gIcon} />
	<link rel="manifest" href="/manifest.webmanifest" />
	<link rel="apple-touch-icon" href="/icons/gIcon-192.png" />
	<meta name="theme-color" content="#373735" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
</svelte:head>

{@render children()}
