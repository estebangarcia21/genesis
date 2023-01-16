<script lang="ts">
	import Container from './Container.svelte';

	export let title: string;
	export let colorScheme: ColorScheme;
	export let tag: string | null = null;

	type ColorScheme = 'indigo' | 'blue' | 'cyan';
	type ColorSchemeAttributes = {
		tagColor: string;
		bgColor: string;
	};

	const COLOR_SCHEME_ATTRIBUTES: Record<ColorScheme, ColorSchemeAttributes> = {
		blue: { bgColor: 'bg-blue-50', tagColor: 'text-blue-600' },
		indigo: { bgColor: 'bg-indigo-50', tagColor: 'text-indigo-600' },
		cyan: { bgColor: 'bg-cyan-50', tagColor: 'text-cyan-600' }
	};

	$: attrs = COLOR_SCHEME_ATTRIBUTES[colorScheme];
</script>

<Container section>
	<section class="mt-8 md:mt-16 rounded-lg py-4 md:py-8 lg:py-20 {attrs.bgColor}">
		<Container>
			<div>
				{#if tag}
					<p
						class="text-sm font-heading md:text-base uppercase mb-4 font-semibold tracking-widest {attrs.tagColor}"
					>
						{tag}
					</p>
				{/if}

				<h1 class="text-2xl md:text-4xl max-w-md mb-4 font-bold">{title}</h1>

				<slot />
			</div>
		</Container>
	</section>
</Container>
