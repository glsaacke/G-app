<script>
    import '../app.css'
</script>

<div class="content-container">
    <h1>Welcome to G-App</h1>
    <div class="link-container">
        <a href="/workouts">Workouts</a>
    </div>
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

    .link-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    a {
        font-family: Arial, Helvetica, sans-serif;
        color: black;
        border: 1px solid black;
        border-radius: 8px;
        padding: 5px 10px;
        text-decoration: none;
    }

    a:hover {
        background-color: black;
        color: white;
    }

</style>
