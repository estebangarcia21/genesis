<script>
  import Container from './Container.svelte';
  import GoMarkGithub from 'svelte-icons/go/GoMarkGithub.svelte';
</script>

<nav class="py-6 border-b border-gray-200 bg-white">
  <Container>
    <div class="flex flex-row justify-between w-full items-center">
      <ul class="flex-1 flex flex-row font-semibold justify-between">
        <li>
          <a href="/">Documentation</a>
        </li>
        <li>
          <a href="/">Github</a>
        </li>
      </ul>

      <div class="flex-[2] flex flex-row justify-end">
        <a
          class="flex flex-row items-center px-8 py-2 border-2 border-gray-800 rounded-sm font-semibold text-gray-800 text-sm transition hover:bg-gray-800 hover:text-white"
          href="/"
        >
          <span class="h-4 mr-2">
            <GoMarkGithub />
          </span>
          Github
        </a>
      </div>
    </div>
  </Container>
</nav>

<style>
  ul a {
    @apply text-gray-900 transition font-semibold;
  }

  ul a:hover {
    @apply text-blue-600;
  }
</style>
