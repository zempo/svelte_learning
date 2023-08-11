<script>
	import { T, useFrame } from '@threlte/core';
	import { interactivity } from '@threlte/extras';
	import { spring } from 'svelte/motion';
	import { Pane } from 'tweakpane';
	import { browser } from '$app/environment';
	import { onDestroy, onMount } from 'svelte';

	interactivity();
	const scale = spring(1);
	let rotation = 0;

	useFrame((state, delta) => {
		rotation += delta;
	});

	// controls
	const BOX_PARAMS = {
		color: '#706ee8',
		posX: 0,
		posY: 4,
		posZ: 0
	};

	let pane;
	onMount(() => {
		if (browser) {
			pane = new Pane({ title: 'Scene' });

			const boxControls = pane.addFolder({ title: 'box' });
			// boxControls.addInput(box, 'position');

			boxControls.addBinding(BOX_PARAMS, 'color');

			boxControls.on('change', ({ value }) => {
				BOX_PARAMS.color = value;
			});
		}
	});

	onDestroy(() => {
		console.log(pane, 'yikes!');
		pane.$destroy();
		console.log(pane, 'destroyed');
	});
</script>

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
/>

<T.DirectionalLight position={[0, 10, 10]} castShadow />

<T.Mesh
	rotation.y={rotation}
	position.y={1}
	scale={$scale}
	on:pointerenter={() => scale.set(1.5)}
	on:pointerleave={() => scale.set(1)}
	castShadow
>
	<T.BoxGeometry args={[1, 2, 1]} />
	<T.MeshStandardMaterial color={BOX_PARAMS.color} />
</T.Mesh>

<T.Mesh rotation.x={-Math.PI / 2} receiveShadow>
	<T.CircleGeometry args={[4, 40]} />
	<T.MeshStandardMaterial color="white" />
</T.Mesh>
