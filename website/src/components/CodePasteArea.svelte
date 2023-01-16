<script lang="ts">
  import { onMount } from 'svelte';

  export let title: string;

  function applyTabtrap(this: any, e: KeyboardEvent) {
    if (e.key == 'Tab') {
      e.preventDefault();
      var start = this.selectionStart;
      var end = this.selectionEnd;
      this.value = this.value.substring(0, start) + '  ' + this.value.substring(end);
      this.selectionStart = this.selectionEnd = start + 2;
    }
  }

  onMount(() => {
    const elems = Array.from(document.getElementsByClassName('genesis-textbox')) as HTMLElement[];

    elems.forEach((elem) => elem?.addEventListener('keydown', applyTabtrap));
  });
</script>

<div class="px-4 py-2 border border-b-0 rounded-t-md">
  <h1 class="font-medium text-sm">{title}</h1>
</div>
<textarea
  spellcheck="false"
  placeholder="Paste your code here..."
  class="genesis-textbox whitespace-pre resize-none p-4 rounded-b-md text-xs w-full border outline-none focus:border-solid"
/>
