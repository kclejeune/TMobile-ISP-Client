<script lang="ts">
  import Card from './Card.svelte';

  export let title = '';
</script>

<Card>
  <span class="inline-flex justify-between">
    {#if title}
      <h2 class="card-title">{title}</h2>
    {/if}
    {#if $$slots.title}
      <slot name="title" />
    {/if}
  </span>
  {#if $$slots.body}
    <slot name="body" />
  {/if}
  {#if $$slots.actions}
    <div class="card-actions">
      <slot name="actions" />
    </div>
  {/if}
</Card>
