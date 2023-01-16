<script>
  import { spring } from 'svelte/motion';
  import ResourceField from './ResourceField.svelte';

  const fadeSpring = spring(1, { stiffness: 0.2, damping: 0.5 });

  const toggle = () => fadeSpring.update((val) => (val ? 0 : 1));

  toggle();
</script>

<aside
  class="h-screen fixed right-0 top-0 border-l-2 border-blue-500 p-8 shadow-lg"
  style="transform: translateX({$fadeSpring * 500}px); width: 575px;"
>
  <h1 class="font-semibold text-lg">Create REST Resource</h1>
  <p class="my-2 text-sm mb-4">Create a MongoDB collection to represent an API object.</p>

  <ResourceField title="Name" description="A MongoDB collection name." />

  <div class="flex flex-col space-y-4">
    <ResourceField title="Description" description="A description of the model." />
  </div>
</aside>
