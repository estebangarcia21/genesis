<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import { page } from '$app/stores';
  import { activeBuilder } from 'src/stores/dashboard';

  export let title: string;
  export let href: string;
  export let icon: typeof SvelteComponent;
</script>

<a
  class="px-3 py-2 flex flex-row items-center font-semibold text-[0.8em] transition hover:text-blue-600"
  class:selected={$page.url.pathname.endsWith(href)}
  on:click={() => activeBuilder.set(title)}
  {href}
>
  <span class="h-[1.2rem] mr-2">
    <svelte:component this={icon} />
  </span>
  {title}
</a>

<style>
  .selected {
    @apply text-blue-600;
  }
</style>
