<script lang="ts">
  import Card from '$lib/components/ui/Card.svelte';
  import StatusList from '$lib/components/ui/StatusList.svelte';
  import type { StatusItem } from '$lib/components/ui/StatusList.svelte';
  import WidgetCard from '$lib/components/ui/WidgetCard.svelte';
  import type { Cell4GStat, Cell5GStat, CellRadioStat } from '$lib/types';
  import ConnectionStrengthIndicator from '$lib/components/ui/ConnectionStrengthIndicator.svelte';
  import Alert from '$lib/components/ui/Alert.svelte';

  export let cellStats: CellRadioStat;
  export let title: string = '';
  let statusItems: StatusItem[];
  $: statusItems = [
    { name: 'Band', value: cellStats.Band },
    { name: 'SNR', value: `${cellStats.SNRCurrent}dB` },
    { name: 'RSRP', value: `${cellStats.RSRPCurrent}dB` },
    { name: 'RSRQ', value: `${cellStats.RSRQCurrent}dB` },
    { name: 'PCI', value: `${cellStats.PhysicalCellID}` },
  ];

  const OFFLINE_SIGNAL_VALUE = -32768;
  export let online: boolean = false;
  $: offline =
    cellStats.RSRPStrengthIndexCurrent === 0 &&
    cellStats.Band === '' &&
    cellStats.SNRCurrent === OFFLINE_SIGNAL_VALUE &&
    cellStats.RSRPCurrent === OFFLINE_SIGNAL_VALUE &&
    cellStats.RSRQCurrent === OFFLINE_SIGNAL_VALUE;
  $: online = !offline;
</script>

<WidgetCard {title}>
  <div slot="title" class="align-baseline">
    <ConnectionStrengthIndicator strength={cellStats.RSRPStrengthIndexCurrent} />
  </div>
  <div slot="body">
    {#if !offline}
      <StatusList items={statusItems} />
    {:else}
      <Alert type="alert-error" msg="Not Connected" />
    {/if}
  </div>
</WidgetCard>
