<script lang="ts" context="module">
  import { Endpoint } from '$lib/types';
  import type { DeviceAppStatus, StatusResponse, DeviceCfg } from '$lib/types';
  export async function load({ fetch }) {
    const res: StatusResponse = await fetch(`/api/${Endpoint.STATUS}`).then((res) => res.json());
    const routerCfg = res.device_app_status[0] as DeviceAppStatus;
    const devices: DeviceCfg[] = res.device_cfg;
    return {
      props: {
        routerCfg: routerCfg,
        devices: devices,
      },
    };
  }

  function convertUptimeToDHMS(seconds: number): string {
    seconds = Number(seconds);
    let d = Math.floor(seconds / (3600 * 24));
    let h = Math.floor((seconds % (3600 * 24)) / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = Math.floor(seconds % 60);

    let dDisplay = d > 0 ? d + 'd' : '';
    let hDisplay = h + 'h';
    let mDisplay = m + 'm';
    let sDisplay = s + 's';
    return `${dDisplay} ${hDisplay} ${mDisplay} ${sDisplay}`.trim();
  }
</script>

<script lang="ts">
  import GatewayInformation from '$lib/components/widgets/GatewayInformation.svelte';
  import H1 from '$lib/components/ui/H1.svelte';
  import DeviceInformation from '$lib/components/widgets/DeviceInformation.svelte';
  import NetworkInformation from '$lib/components/widgets/NetworkInformation.svelte';

  export let routerCfg: DeviceAppStatus;
  export let devices: DeviceCfg[];

  setInterval(() => {
    routerCfg.UpTime++;
  }, 1000);
</script>

<H1>Overview</H1>

<div class="grid gap-4 m-4 md:grid-cols-2">
  <div class="col-auto">
    <GatewayInformation
      description={routerCfg.Description}
      softwareVersion={routerCfg.SoftwareVersion}
      hardwareVersion={routerCfg.HardwareVersion}
      serialNumber={routerCfg.SerialNumber}
      uptime={convertUptimeToDHMS(routerCfg.UpTime)}
    />
  </div>

  <div class="col-auto">
    <DeviceInformation {devices} />
  </div>
  <div class="col-auto">
    <NetworkInformation />
  </div>

  <div class="col-auto" />
</div>
