<script lang="ts" context="module">
  import { Endpoint } from '$lib/types';
  import type { DeviceAppStatus, StatusResponse, DeviceCfg } from '$lib/types';
  export async function load({ fetch }) {
    const res: StatusResponse = await fetch(`/api/${Endpoint.STATUS}`).then((res: Response) =>
      res.json(),
    );
    const devices: DeviceCfg[] = res.device_cfg;
    return {
      props: {
        devices: devices.sort((a, b) =>
          a.HostName.toLowerCase().localeCompare(b.HostName.toLowerCase()),
        ),
      },
    };
  }
</script>

<script lang="ts">
  import H1 from '$lib/components/ui/H1.svelte';
  import StatusList from '$lib/components/ui/StatusList.svelte';
  import WidgetCard from '$lib/components/ui/WidgetCard.svelte';

  export let devices: DeviceCfg[];
  function cleanHostname(hostname: string) {
    return hostname.replace(/.*unknown.*/gi, 'Unknown');
  }
</script>

<H1>Devices</H1>
<div class="grid grid-cols-1 gap-4 m-4 md:grid-cols-2 lg:grid-cols-3">
  {#each devices as device}
    <div class="col-auto">
      <WidgetCard>
        <div slot="body">
          <StatusList
            items={[
              { name: 'Hostname', value: cleanHostname(device.HostName) },
              { name: 'IP Address', value: device.IPAddress },
              { name: 'MAC Address', value: device.MACAddress },
              { name: 'Interface Type', value: device.InterfaceType },
              { name: 'Address Source', value: device.AddressSource },
            ]}
          />
        </div>
      </WidgetCard>
    </div>
  {/each}
</div>
