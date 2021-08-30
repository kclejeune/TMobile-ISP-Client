<script lang="ts">
  import WidgetCard from '$lib/components/ui/WidgetCard.svelte';
  import StatusList from '$lib/components/ui/StatusList.svelte';
  import OnlineIndicator from '$lib/components/ui/OnlineIndicator.svelte';

  export let serialNumber: string;
  export let softwareVersion: string;
  export let hardwareVersion: string;
  export let uptime: string;
  export let online: boolean;

  $: statusItems = [
    { name: 'Serial Number', value: serialNumber },
    { name: 'Software Version', value: softwareVersion },
    { name: 'Hardware Version', value: hardwareVersion },
    { name: 'Uptime', value: uptime },
  ];
</script>

<WidgetCard title="Gateway Information">
  <div slot="title">
    <OnlineIndicator {online} />
  </div>
  <div slot="body">
    <StatusList items={statusItems} />
  </div>
</WidgetCard>
