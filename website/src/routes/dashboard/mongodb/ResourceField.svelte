<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<div class="flex flex-row items-center my-2 justify-between">
  <div class="flex-[2] pr-4">
    <label for="name" class="font-heading text-sm">{title}</label>
    <p class="text-xs">{description}</p>
  </div>
  <input
    name="name"
    class="flex-[3] text-gray-700 rounded-sm border py-2 px-3 text-sm outline-none transition focus:border-gray-400"
  />
</div>
