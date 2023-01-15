<script>
	import Container from './Container.svelte';
	import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte';
</script>

<nav class="py-6 border-b border-gray-200 bg-white">
	<Container>
		<div class="flex flex-row justify-between w-full items-center">
			<ul class="flex-1 flex flex-row font-semibold justify-between">
				<li>
					<a href="/docs">Documentation</a>
				</li>
				<li>
					<a href="/github">Github</a>
				</li>
			</ul>

			<div class="flex-[2] flex flex-row justify-end">
				<button
					class="flex flex-row items-center font-mono px-8 py-2 border-2 border-gray-800 rounded-sm font-semibold text-gray-800 text-sm transition hover:bg-gray-800 hover:text-white"
				>
					<span class="h-4 mr-2">
						<GoMarkGithub />
					</span>
					Github
				</button>
			</div>
		</div>
	</Container>
</nav>

<style>
	a {
		@apply text-gray-900 transition;
	}

	a:hover {
		@apply text-indigo-600;
	}
</style>
