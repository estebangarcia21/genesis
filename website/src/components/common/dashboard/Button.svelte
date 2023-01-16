<script lang="ts">
  export let color: 'blue' | 'gray';
  export let text: string;
  export let href: string | undefined = undefined;

  type TailwindCSSClasses = {
    txt: string;
    hover: string;
    bg: string;
  };

  const COLOR_MAP: Record<typeof color, TailwindCSSClasses> = {
    blue: { bg: 'bg-blue-600', hover: 'hover:bg-blue-500', txt: 'text-white' },
    gray: { bg: 'bg-gray-700', hover: 'hover:bg-gray-600', txt: 'text-white' }
  };

  const attrs = COLOR_MAP[color];

  $: elem = href ? 'a' : 'button';
  $: props = {
    class: `px-4 py-2 text-sm mt-2 rounded-sm transition ${attrs.bg} ${attrs.txt} ${attrs.hover} font-medium`,
    href
  };
</script>

<svelte:element this={elem} {...props}>
  {text}
</svelte:element>
