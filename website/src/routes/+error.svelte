<script>
	import { page } from '$app/stores';
</script>

<div class="w-full h-screen flex flex-col justify-center items-center">
	<h1 class="font-bold text-3xl">Uh oh!</h1>
	<p class="font-medium text-xl">An error occured.</p>
	<p class="font-mono bg-rose-50 p-2 rounded-sm text-sm font-medium mt-4">
		{$page.status}: {$page.error?.message}
	</p>
</div>
