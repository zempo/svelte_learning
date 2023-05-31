<script>
	import PageContainer from '$lib/components/utils/PageContainer.svelte';

	let paths = [
		{
			_id: 1,
			text: `Administration`,
			path: `staff/admin`
		},
		{
			_id: 2,
			text: `Teachers`,
			path: `staff/teachers`
		},
		{
			_id: 3,
			text: `Maintenance`,
			path: `staff/maintenance`
		},
		{
			_id: 4,
			text: `First Years`,
			path: `students/firstyears`
		},
		{
			_id: 5,
			text: `Sophomores`,
			path: `students/sophomores`
		},
		{
			_id: 6,
			text: `Juniors`,
			path: `students/junior`
		},
		{
			_id: 7,
			text: `Seniors`,
			path: `students/senior`
		}
	];
	let pathSelected = '';
	let name = '';
</script>

<PageContainer pgClass="rest_pg">
	<h1>Rest Parameters</h1>

	<label>
		<b>School Directory</b>
		<select bind:value={pathSelected}>
			{#each paths as P}
				<option value={P.path}>
					{P.text}
				</option>
			{/each}
		</select>
	</label>
	<label>
		<input type="text" placeholder="Who are you looking up?" bind:value={name} />
	</label>
	<p>
		<a href={`/media/${pathSelected}/${name}`} role="button">Get info for {name}</a>
	</p>
</PageContainer>
