<script lang="ts">
  export let options: any[];
  export let selected: any = undefined;
  export let open: boolean = false;
  export let displayWith: (value: any) => any = undefined;
  if (!displayWith) {
    displayWith = (value) => value;
  }
</script>

<div class="dropdown dropdown-hover {open ? 'dropdown-open' : ''}">
  {#if $$slots.default}
    <div tabindex="0" class="m-1 btn"><slot /></div>
  {/if}
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    {#each options as option}
      <li on:click={() => (selected = option)}>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a>{displayWith(option)}</a>
      </li>
    {/each}
  </ul>
</div>
