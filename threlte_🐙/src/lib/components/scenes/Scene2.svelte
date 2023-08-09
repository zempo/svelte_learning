<script>
	import { T, useFrame } from '@threlte/core';
	import { interactivity } from '@threlte/extras';

	let rotation = 0;
	// useFrame is relying on a context provided
	// by <Canvas>. Because we are definitely inside
	// <Canvas>, we can safely use it.
	useFrame((_, delta) => {
		rotation += delta;
	});
	// This file is also typically the place to
	// inject plugins
	interactivity();
</script>

<T.DirectionalLight position={[0, 10, 10]} castShadow />

<T.Mesh rotation.y={rotation}>
	<T.BoxGeometry />
	<!-- <T.MeshBasicMaterial color="green" /> -->
	<T.MeshStandardMaterial
		transparent
		roughness={0.418}
		metalness={0.6139}
		color="#ff1f00"
		emissive="#000105"
		envMapIntensity={10}
	>
		<!-- <Sync
    color
    opacity
    emissive
    roughness
    metalness
    envMapIntensity
  /> -->
	</T.MeshStandardMaterial>
</T.Mesh>
