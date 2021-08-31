<script lang="ts">
  export let options: any[];
  export let selected: any = undefined;
  export let displayWith: (value: any) => any = undefined;
  if (!displayWith) {
    displayWith = (value) => `${value}s`;
  }
</script>

<ul class="menu py-3 bg-base-300 rounded-box horizontal">
  <li class="menu-title">
    <span><slot /></span>
  </li>
  {#each options as option}
    <li on:click={() => (selected = option)}>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a class="rounded-lg {selected === option ? 'bg-primary' : ''}">{displayWith(option)}</a>
    </li>
  {/each}
</ul>
