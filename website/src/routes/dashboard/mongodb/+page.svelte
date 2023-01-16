<script lang="ts">
  import Button from 'src/components/common/dashboard/Button.svelte';
  import Step from 'src/components/guide/Step.svelte';
  import DashboardPage from 'src/routes/DashboardPage.svelte';
  import CreateModel from './CreateModel.svelte';
  import RoutePolicyConfigurationWidget from './RoutePolicyConfigurationWidget.svelte';

  let showCreateResource = false;
</script>

<DashboardPage title="Create MongoDB API" description="Generate an API using a PrismaDB schema.">
  <Step title="REST Resources" number={1}>
    <Button text="Add resource" color="gray" onClick={() => (showCreateResource = true)} />
    {#if showCreateResource}
      <CreateModel />
    {/if}
  </Step>
  <Step title="Route Policies" number={2}>
    <RoutePolicyConfigurationWidget />
  </Step>
  <Step title="Deployment Configuration" number={3}>
    <RoutePolicyConfigurationWidget />
  </Step>

  <div class="mt-4" />

  <div class="flex flex-row space-x-4">
    <Button text="Download as ZIP" color="blue" />
    <Button text="Host on AWS" color="gray" />
  </div>
</DashboardPage>
