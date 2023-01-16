<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<h1 class="font-semibold text-3xl">{title}</h1>
<p class="my-2">{description}</p>

<slot />
