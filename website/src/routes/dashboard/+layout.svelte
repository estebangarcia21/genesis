<script lang="ts">
  import DiNodejsSmall from 'svelte-icons/di/DiNodejsSmall.svelte';
  import MdWeb from 'svelte-icons/md/MdWeb.svelte';
  import Link from './Link.svelte';
  import LinkGroup from './LinkGroup.svelte';
  import IoIosThunderstorm from 'svelte-icons/io/IoIosThunderstorm.svelte';
  import DiDatabase from 'svelte-icons/di/DiDatabase.svelte';
</script>

<div class="flex flex-row w-full">
  <aside class="h-screen p-8 max-w-[300px] sticky top-0">
    <div>
      <LinkGroup title="API">
        <p slot="description" class="text-sm">Generate an API project that you can build off of.</p>

        <div class="link-set">
          <Link title="PrismaDB" href="prisma" icon={DiDatabase} />
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

  <div class="py-8 w-full">
    <slot />
  </div>
</div>

<style>
  .link-set {
    @apply space-y-2;
  }
</style>
