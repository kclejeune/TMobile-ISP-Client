<script lang="ts">
  import type { DeviceCfg } from '$lib/types';
  import WidgetCard from '$lib/components/ui/WidgetCard.svelte';
  import StatusList from '../components/ui/StatusList.svelte';

  export let devices: DeviceCfg[];
  let wirelessTypes = ['802.11', '802.11n', '802.11ac'];
  let wiredTypes = ['wlan0', 'ethernet'];

  $: wirelessDevices = devices.filter((d) => wirelessTypes.includes(d.InterfaceType.toLowerCase()));
  $: ethernetDevices = devices.filter((d) => wiredTypes.includes(d.InterfaceType.toLowerCase()));
  $: statusItems = [
    {
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
</svg>`,
      name: 'Wireless',
      value: `${wirelessDevices.length} ${wirelessDevices.length > 1 ? 'Devices' : 'Device'}`,
    },
    {
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
</svg>`,
      name: 'Ethernet',
      value: `${ethernetDevices.length} ${ethernetDevices.length > 1 ? 'Devices' : 'Device'}`,
    },
  ];
</script>

<WidgetCard title="Devices">
  <div slot="body">
    <StatusList items={statusItems} />
  </div>
  <div slot="actions">
      <a sveltekit:prefetch href="/devices" class="btn btn-primary">View Devices</a>
  </div>
</WidgetCard>
