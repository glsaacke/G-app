<script lang="ts">
    import { onMount } from 'svelte';
    
    onMount(() => {
        pullWorkoutWeek();
    });

    function handleGenerateWeek() {
        console.log('Generate New Week button clicked');
    }

    async function pullWorkoutWeek() {
        const results = await fetch('/api/exercises');
        const exercises = await results.json();
        console.log(exercises);
    }

    
</script>

<div class="content-container">
    <h1>Workouts</h1>
    <button onclick={handleGenerateWeek}>Generate New Week</button>
</div>

<style>
     .content-container {
        background-color: #f0f0f0;
        width: 100%;
        border-right: 3px solid #000000;
        border-bottom: 3px solid #000000;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        gap: 40px
    }
</style>