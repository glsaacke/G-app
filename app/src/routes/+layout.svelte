<script lang="ts">
	import gIcon from '#lib/assets/gIcon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={gIcon} />
</svelte:head>

{@render children()}
