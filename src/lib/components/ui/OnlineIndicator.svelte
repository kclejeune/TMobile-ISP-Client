<script lang="ts">
  export let online: boolean;
</script>

<span>
  <span class="text-lg font-light">{online ? 'Online' : 'Offline'}</span>
  <span
    class="indicator-item indicator-middle indicator-center badge badge-xs 
  {online ? 'bg-success' : 'bg-error'}"
  />
</span>
