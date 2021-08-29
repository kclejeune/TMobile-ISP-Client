<script lang="ts">
  export let open: boolean;
  export let title: string;
</script>

<div class="collapse w-96 border rounded-box border-base-300 collapse-arrow">
  <input type="checkbox" bind:checked={open} />
  <div class="collapse-title text-xl font-medium">{title}</div>
  <div class="collapse-content">
    <slot />
  </div>
</div>
