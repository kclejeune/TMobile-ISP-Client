<script lang="ts">
  export let title = '';
</script>

<div class="shadow-md card bordered bg-base-100">
  <div class="card-body">
    {#if title}
      <h2 class="card-title">{title}</h2>
    {/if}
    <slot />
  </div>
</div>
