<script lang="ts">
  export let number: number;
  export let title: string;
</script>

<div class="step">
  <div class="flex flex-col h-full">
    <div
      class="max-w-sm relative rounded-sm py-2 w-12 h-12 flex flex-row justify-center items-center bg-blue-600 text-white"
    >
      <p class="absolute font-mono font-semibold text-sm">
        {number}
      </p>
    </div>

    <div class="flex flex-row justify-center h-full py-3">
      <div class="h-full w-[0.75px] bg-gray-200" />
    </div>
  </div>

  <div class="flex-auto">
    <p class="py-2 font-heading font-medium text-lg">{title}</p>

    <div class="py-2">
      <div>
        <slot />
      </div>
    </div>

    <p>
      Anim incididunt ut aliquip adipisicing. Nostrud adipisicing fugiat culpa consectetur ad labore
      veniam ullamco. Cupidatat ut sunt adipisicing consequat excepteur sint excepteur commodo.
      Reprehenderit adipisicing adipisicing elit cupidatat aliquip id qui duis nulla eu ipsum et
      sit. Excepteur exercitation eiusmod nisi dolore quis excepteur et excepteur quis non in quis.
    </p>
  </div>
</div>

<style>
  .step {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 24px;
    width: 50%;
  }
</style>
