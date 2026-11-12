<script lang="ts">
    import { onMount } from 'svelte';

    import type { Exercise } from '#lib/types/exercise.js';

    let allExercises = $state<Exercise[]>([]);
    
    onMount(async () => {
        allExercises = await getAllExercises();
    });

    function handleGenerateWeek() {
        console.log('Generate New Week button clicked');
    }


    async function getAllExercises(): Promise<Exercise[]> {
        const results = await fetch('/api/exercises', { method: 'GET' });
        let exercises: Exercise[] = await results.json();
        return exercises;
    }

    $inspect(allExercises);
</script>

<div class="content-container card">
    <h1>Workouts</h1>
    <button onclick={handleGenerateWeek}>Generate New Week</button>
    <button>Exercises</button>
</div>

<div class="card">
    <h2>Exercises</h2>
    {#if allExercises.length > 0}
            {#each allExercises as exercise}
            //TODO: Replace button with new component
                <button class="exercise-button">{exercise.name}</button>
            {/each}
    {:else}
        <p>Loading...</p>
    {/if}


</div>

<style>

    .exercise-button {
        border: none;

    }

    .exercise-button:hover {
        cursor: pointer;
        background-color: #e0e0e0;
    }

</style>


