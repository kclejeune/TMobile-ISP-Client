<script lang="ts">
  import Card from '$lib/components/ui/Card.svelte';
  import StatusList from '$lib/components/ui/StatusList.svelte';
  import type { StatusItem } from '$lib/components/ui/StatusList.svelte';
  import WidgetCard from '$lib/components/ui/WidgetCard.svelte';
  import type { Cell4GStat, Cell5GStat, CellRadioStat } from '$lib/types';
  import ConnectionStrengthIndicator from '$lib/components/ui/ConnectionStrengthIndicator.svelte';

  export let cellStats: CellRadioStat;
  export let title: string;
  let statusItems: StatusItem[];
  $: statusItems = [
    { name: 'Band', value: cellStats.Band },
    { name: 'RSRP', value: `${cellStats.RSRPCurrent}dB` },
    { name: 'RSRQ', value: `${cellStats.RSRQCurrent}dB` },
    { name: 'SNR', value: `${cellStats.SNRCurrent}dB` },
  ];
</script>

<WidgetCard {title}>
  <div slot="title">
    <ConnectionStrengthIndicator strength={cellStats.RSRPStrengthIndexCurrent} />
  </div>
  <div slot="body">
    <StatusList items={statusItems} />
  </div>
</WidgetCard>
