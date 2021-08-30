<script lang="ts">
  export let columns: string[];
  export let data: Record<string, any>[];
</script>

<div class="overflow-x-auto overflow-y-auto">
  <table class="table table-compact w-full">
    <thead>
      <tr>
        <th />
        {#each columns as col}
          <th>{col ?? ''}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each data as row, i}
        <tr>
          <th>{i + 1}</th>
          {#each columns as col}
            <th>{row[col] ?? 'N/A'}</th>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
