<script lang="ts">
  export let section: boolean = false;

  const maxWidthStyle = section ? 'max-w-[1000px]' : 'max-w-[800px]';
</script>

<div class="px-4 h-full">
  <div class="mx-auto h-full {maxWidthStyle}">
    <slot />
  </div>
</div>
