<script lang="ts">
	export let section: boolean = false;

	const maxWidthStyle = section ? 'max-w-[1000px]' : 'max-w-[800px]';
</script>

<div class="px-4">
	<div class="mx-auto {maxWidthStyle}">
		<slot />
	</div>
</div>
