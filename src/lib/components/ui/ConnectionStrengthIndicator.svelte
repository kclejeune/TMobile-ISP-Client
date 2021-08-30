<script lang="ts">
  export let strength: number;
  export let total: number = 5;
  export let size: 'badge-xs' | 'badge-sm' | 'badge-md' | 'badge-lg' = 'badge-xs';

  let items = [...Array(total).keys()];
</script>

<span class="inline-flex">
  {#each items as item}
    <span
      class="indicator-item indicator-middle indicator-center badge {size} {item < strength
        ? 'bg-success'
        : 'bg-base-300'}"
    />
  {/each}
</span>
