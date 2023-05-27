<script>
	let count = 0;
	const incr = () => (count += 1);
</script>

<button on:click={incr}>
	{count}
</button>
