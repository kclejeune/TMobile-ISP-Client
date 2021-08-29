<script lang="ts" context="module">
  export type StatusItem = {
    svgIcon?: string;
    name: string;
    value: any;
  };
</script>

<script lang="ts">
  export let items: StatusItem[] = [];
</script>

{#each items as { svgIcon, name, value }}
  <div class="flex justify-between">
    <span class="inline-flex">
      {#if svgIcon}
        <span class="mr-2">{@html svgIcon}</span>
      {/if}
      <span>{name}:</span>
    </span>
    <span class="font-semibold">{value}</span>
  </div>
{/each}
