<script lang="ts">
  import CodePasteArea from 'src/components/CodePasteArea.svelte';
  import Button from 'src/components/common/dashboard/Button.svelte';
  import Step from 'src/components/guide/Step.svelte';
  import DashboardPage from 'src/routes/DashboardPage.svelte';
  import RoutePolicyConfigurationWidget from './RoutePolicyConfigurationWidget.svelte';
</script>

<DashboardPage title="Create PrismaDB API" description="Generate an API using a PrismaDB schema.">
  <Step title="PrismaJS Schema" number={1}>
    <CodePasteArea title="Prisma AST Analysis" />
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
