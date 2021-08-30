<script lang="ts" context="module">
  import { Endpoint } from '$lib/types';
  import type {
    DeviceAppStatus,
    StatusResponse,
    DeviceCfg,
    NetworkStatusResponse,
    Cell4GStat,
    Cell5GStat,
    CellRadioStat,
  } from '$lib/types';
  export async function load({ fetch }) {
    const status: StatusResponse = await fetch(`/api/${Endpoint.STATUS}`).then((res: Response) =>
      res.json(),
    );
    const routerCfg = status.device_app_status[0] as DeviceAppStatus;
    const devices: DeviceCfg[] = status.device_cfg;

    const network: NetworkStatusResponse = await fetch(
      `/api/${Endpoint.NETWORK}`,
    ).then((res: Response) => res.json());

    const cell5GStats: Cell5GStat = network.cell_5G_stats_cfg[0].stat;
    const cellLTEStats: Cell4GStat = network.cell_LTE_stats_cfg[0].stat;
    const online: boolean = network.connection_status[0].ConnectionStatus === 1;

    return {
      props: {
        routerCfg: routerCfg,
        devices: devices,
        cell5GStats: cell5GStats as CellRadioStat,
        cellLTEStats: cellLTEStats as CellRadioStat,
        online: online,
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
  import GatewayInformation from '$lib/widgets/GatewayInformation.svelte';
  import H1 from '$lib/components/ui/H1.svelte';
  import DeviceInformation from '$lib/widgets/DeviceInformation.svelte';
  import NetworkInformation from '$lib/widgets/NetworkInformation.svelte';
  import { onDestroy } from 'svelte';

  export let routerCfg: DeviceAppStatus;
  export let devices: DeviceCfg[];
  export let cell5GStats: CellRadioStat;
  export let cellLTEStats: CellRadioStat;
  export let online: boolean;

  const uptimeInterval = setInterval(() => {
    routerCfg.UpTime++;
  }, 1000);

  onDestroy(() => {
    clearInterval(uptimeInterval);
  });
</script>

<H1>Overview</H1>

<div class="grid gap-4 m-4 md:grid-cols-2 lg:grid-cols-3">
  <div class="col-auto">
    <GatewayInformation
      {online}
      softwareVersion={routerCfg.SoftwareVersion}
      hardwareVersion={routerCfg.HardwareVersion}
      serialNumber={routerCfg.SerialNumber}
      uptime={convertUptimeToDHMS(routerCfg.UpTime)}
    />
  </div>
  <div class="col-auto">
    <NetworkInformation title="5G Network Information" cellStats={cell5GStats} />
  </div>
  <div class="col-auto">
    <NetworkInformation title="LTE Network Information" cellStats={cellLTEStats} />
  </div>
  <div class="col-auto">
    <DeviceInformation {devices} />
  </div>
</div>
