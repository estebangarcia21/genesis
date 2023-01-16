<script lang="ts">
  import { activeBuilder } from 'src/stores/dashboard';
  import DiDatabase from 'svelte-icons/di/DiDatabase.svelte';
  import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte';
  import IoIosThunderstorm from 'svelte-icons/io/IoIosThunderstorm.svelte';
  import MdWeb from 'svelte-icons/md/MdWeb.svelte';
  import { spring } from 'svelte/motion';
  import Container from '../Container.svelte';
  import Link from './Link.svelte';
  import LinkGroup from './LinkGroup.svelte';

  let fadeSpring;

  function playAnimation(activeBuilder: string | null) {
    if (!activeBuilder) {
      fadeSpring = spring(1);
      return;
    }

    fadeSpring = spring(0, { stiffness: 0.2, damping: 0.9 });
    fadeSpring.set(1);
  }

  $: playAnimation($activeBuilder);
</script>

<div class="flex flex-row w-full">
  <aside class="h-screen p-8 max-w-[300px] sticky top-0">
    <div>
      <LinkGroup title="API">
        <p slot="description" class="text-sm">Generate an API project that you can build off of.</p>

        <div class="link-set">
          <Link title="MongoDB" href="mongodb" icon={DiDatabase} />
          <Link title="Node Postgres" href="builder" icon={DiNodejsSmall} />
        </div>
      </LinkGroup>
      <LinkGroup title="Serverless">
        <p slot="description" class="text-sm">Create ready to deploy serverless functions.</p>

        <Link title="AWS" href="/sls-func-aws" icon={IoIosThunderstorm} />
        <Link title="GCP" href="/sls-func-gcp" icon={MdWeb} />
      </LinkGroup>
    </div>
  </aside>

  <div class="py-8 w-full" style:opacity={$fadeSpring}>
    <Container section>
      <slot />
    </Container>
  </div>
</div>

<style>
  .link-set {
    @apply space-y-2;
  }
</style>
