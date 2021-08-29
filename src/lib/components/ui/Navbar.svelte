<script lang="ts" context="module">
  export type Route = {
    path: string;
    title: string;
    id: string;
  };
</script>

<script lang="ts">
  import { page } from '$app/stores';

  export let title: string = '';
  export let routes: Route[] = [];
  let open = false;
</script>

<div class="z-50 h-full shadow bg-base-200 drawer">
  <input id="my-drawer-3" type="checkbox" bind:checked={open} class="drawer-toggle" />
  <div class="flex flex-col drawer-content">
    <div class="fixed top-0 z-50 w-full navbar bg-neutral-focus">
      <div class="flex-none sm:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>
      {#if title}
        <div class="flex-none sm:block">
          <div class="mx-4 text-lg">{title}</div>
        </div>
      {/if}
      <div class="flex-none hidden sm:block">
        <ul class="menu horizontal">
          {#each routes as route}
            <li class="mx-1">
              <a
                sveltekit:prefetch
                href={route.path}
                class="rounded-btn {route.path === $page.path ? 'bg-base-200' : ''}"
              >
                {route.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    <slot />
  </div>
  <div class="drawer-side">
    <label for="my-drawer-3" class="drawer-overlay" />
    <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
      {#each routes as route}
        <li class="my-1">
          <a
            on:click={() => {
              open = false;
            }}
            sveltekit:prefetch
            href={route.path}
            class="rounded-btn {route.path === $page.path ? 'bg-base-200' : ''}"
          >
            {route.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
