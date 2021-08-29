<script lang="ts">
  import WidgetCard from '$lib/components/ui/WidgetCard.svelte';
  import StatusList from '../ui/StatusList.svelte';

  export let description: string;
  export let serialNumber: string;
  export let softwareVersion: string;
  export let hardwareVersion: string;
  export let uptime: string;

  $: statusItems = [
    { name: 'Serial Number', value: serialNumber },
    { name: 'Software Version', value: softwareVersion },
    { name: 'Hardware Version', value: hardwareVersion },
    { name: 'Uptime', value: uptime },
  ];
</script>

<WidgetCard title="Gateway Information" online={true}>
  <div slot="body">
    <StatusList items={statusItems} />
  </div>
</WidgetCard>
