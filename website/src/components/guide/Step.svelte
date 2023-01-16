<script lang="ts">
  export let number: number;
  export let title: string;
</script>

<div class="step items-center my-4">
  <div
    class="max-w-sm relative rounded-sm w-max p-5 flex flex-row justify-center items-center bg-blue-600"
  >
    <p class="absolute font-mono text-white font-semibold text-sm">
      {number}
    </p>
  </div>

  <p class="font-heading font-medium text-lg">{title}</p>

  <div class="flex flex-row justify-center h-full">
    <div class="h-full w-[0.75px] bg-gray-100" />
  </div>

  <div>
    <slot />
  </div>
</div>

<style>
  .step {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 12px;
    width: 50%;
  }
</style>
