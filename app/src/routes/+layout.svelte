<script lang="ts">
	import gIcon from '#lib/assets/gIcon.png';
	import Navbar from '#lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={gIcon} />
	<link rel="manifest" href="/manifest.webmanifest" />
	<link rel="apple-touch-icon" href="/icons/gIcon-192.png" />
	<meta name="theme-color" content="#373735" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
</svelte:head>

<div class="layout-container">
	<Navbar />
	<div class="content-container">
		{@render children()}
	</div>
</div>

<style>
    .layout-container {
        display: flex;
		flex-direction: column;
        align-items: center;
        min-height: 100vh;
		padding-top: 40px;
		gap: 20px;
		background-color:rgb(237, 233, 226)
    }

    .content-container {
        width: 84vw;
		display: flex;
        flex-direction: column;
        align-items: center;
		border: 2px dashed magenta;
    }

	@media (min-width: 900px) {
		.content-container {
			width: 50vw;
		}
	}

</style>

