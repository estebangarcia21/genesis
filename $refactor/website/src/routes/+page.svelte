<script lang="ts">
	import Container from './Container.svelte';
	import Navbar from './Navbar.svelte';
	import Section from './Section.svelte';
</script>

<Navbar />

<Container>
	<section class="py-20 text-center">
		<h1 class="text-4xl font-semibold">Genesis</h1>
		<p class="mt-2">Generate APIs from a PrismaDB schema!</p>

		<div class="flex flex-row justify-center mt-6 space-x-4">
			<button
				class="font-mono px-8 py-4 bg-indigo-600 rounded-sm font-semibold text-white text-sm transition hover:bg-indigo-500"
			>
				Web Tool
			</button>
			<button
				class="font-mono px-8 py-4 bg-gray-800 rounded-sm font-semibold text-white text-sm transition hover:bg-gray-700"
			>
				CLI Tool
			</button>
		</div>
	</section>
</Container>

<Section title="Project structure" tag="Getting started" colorScheme="blue">
	<div class="flex flex-col sm:flex-row sm:space-x-8">
		<p>
			Et culpa et excepteur culpa esse cupidatat nostrud aliquip sint. Consectetur consequat nostrud
			proident Lorem. Dolore adipisicing esse anim dolore. Proident reprehenderit ut aliquip ullamco
			magna culpa cupidatat. Labore fugiat ex sunt eu nisi commodo proident ad cupidatat Lorem
			minim. Id irure proident id reprehenderit.
		</p>

		<p>
			Et culpa et excepteur culpa esse cupidatat nostrud aliquip sint. Consectetur consequat nostrud
			proident Lorem. Dolore adipisicing esse anim dolore. Proident reprehenderit ut aliquip ullamco
			magna culpa cupidatat. Labore fugiat ex sunt eu nisi commodo proident ad cupidatat Lorem
			minim. Id irure proident id reprehenderit.
		</p>
	</div>
</Section>

<Section title="Project structure" tag="Getting started" colorScheme="indigo">
	<div class="flex flex-col sm:flex-row sm:space-x-8">
		<p>
			Et culpa et excepteur culpa esse cupidatat nostrud aliquip sint. Consectetur consequat nostrud
			proident Lorem. Dolore adipisicing esse anim dolore. Proident reprehenderit ut aliquip ullamco
			magna culpa cupidatat. Labore fugiat ex sunt eu nisi commodo proident ad cupidatat Lorem
			minim. Id irure proident id reprehenderit.
		</p>

		<p>
			Et culpa et excepteur culpa esse cupidatat nostrud aliquip sint. Consectetur consequat nostrud
			proident Lorem. Dolore adipisicing esse anim dolore. Proident reprehenderit ut aliquip ullamco
			magna culpa cupidatat. Labore fugiat ex sunt eu nisi commodo proident ad cupidatat Lorem
			minim. Id irure proident id reprehenderit.
		</p>
	</div>
</Section>

<Section title="Project structure" tag="Getting started" colorScheme="cyan">
	<div class="flex flex-col sm:flex-row sm:space-x-8">
		<p>
			Et culpa et excepteur culpa esse cupidatat nostrud aliquip sint. Consectetur consequat nostrud
			proident Lorem. Dolore adipisicing esse anim dolore. Proident reprehenderit ut aliquip ullamco
			magna culpa cupidatat. Labore fugiat ex sunt eu nisi commodo proident ad cupidatat Lorem
			minim. Id irure proident id reprehenderit.
		</p>

		<p>
			Et culpa et excepteur culpa esse cupidatat nostrud aliquip sint. Consectetur consequat nostrud
			proident Lorem. Dolore adipisicing esse anim dolore. Proident reprehenderit ut aliquip ullamco
			magna culpa cupidatat. Labore fugiat ex sunt eu nisi commodo proident ad cupidatat Lorem
			minim. Id irure proident id reprehenderit.
		</p>
	</div>
</Section>

<div class="mb-20" />
