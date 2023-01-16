<script lang="ts">
  import { parsedASTModels } from 'src/stores/dashboard/prisma/create';
  import type { Model } from './types';

  let models: Model[] = [];

  parsedASTModels.subscribe((m) => (models = m || []));
</script>

<p>
  Consequat amet officia culpa ea mollit eiusmod sunt adipisicing. Reprehenderit quis do veniam
  ipsum magna deserunt aliqua laborum ipsum velit adipisicing non consectetur.
</p>

{#each models as model}{/each}
