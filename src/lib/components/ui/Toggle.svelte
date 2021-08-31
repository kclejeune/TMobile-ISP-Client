<script lang="ts">
  export let active: boolean = false;
  export let color: 'toggle-primary' | 'toggle-secondary' | 'toggle-accent' | '' = 'toggle-primary';
</script>

<span class="form-control inline-flex">
  <span class="m-2"><slot /></span>

  <span class="m-2">
    <input type="checkbox" checked={active} class="toggle {color}" />
  </span>
</span>
