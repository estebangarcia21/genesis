<script lang="ts">
	export let title: string;
</script>

<section class="mb-4 rounded-md shadow-sm p-4 border border-gray-200">
	<div class="mb-2">
		<h1 class="font-semibold text-xl">{title}</h1>
		<slot name="description" />
	</div>

	<div>
		<slot />
	</div>
</section>
