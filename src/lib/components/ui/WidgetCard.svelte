<script lang="ts">
  import OnlineIndicator from './OnlineIndicator.svelte';

  export let title = '';
  export let online: boolean = undefined;
</script>

<div class="shadow-md card bordered bg-base-100">
  <div class="card-body">
    <span class="inline-flex justify-between">
      {#if title}
        <h2 class="card-title">{title}</h2>
      {/if}
      {#if online}
        <span class="card-subtitle">
          <OnlineIndicator {online} />
        </span>
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
  </div>
</div>
