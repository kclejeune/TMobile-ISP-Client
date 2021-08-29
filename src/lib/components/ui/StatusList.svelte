<script lang="ts">
  type StatusItem = {
    svgIcon?: string;
    name: string;
    value: string;
  };
  export let items: StatusItem[] = [];
</script>

{#if items.length > 0}
  <ul>
    {#each items as { svgIcon, name, value }}
      <li class="flex justify-between">
        <span class="inline-flex">
          {#if svgIcon}
            <span class="mx-1 mr-2">{@html svgIcon}</span>
          {/if}
          <span class="mx-1">{name}:</span>
        </span>
        <span class="font-semibold">{value}</span>
      </li>
    {/each}
  </ul>
{/if}
