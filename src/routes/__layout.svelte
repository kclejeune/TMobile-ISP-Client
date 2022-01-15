<script lang="ts">
  import Navbar from '$lib/components/ui/Navbar.svelte';
  import type { Route } from '$lib/components/ui/Navbar.svelte';
  import '../app.postcss';

  export let title = 'T-Mobile ISP';
  export let pages: string[] = ['Overview', 'Devices'];
  export let routes: Route[] = pages.map((page): Route => {
    return {
      path: `/${page.toLowerCase().replace(/\s/g, '-')}`,
      id: page.toLowerCase().replace(/\s/g, '-'),
      title: page,
    };
  });
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="w-full h-screen">
  <Navbar {title} {routes}>
    <div class="container w-full h-full pt-16 m-4 mx-auto bg-base-200">
      <slot />
    </div>
  </Navbar>
</div>
