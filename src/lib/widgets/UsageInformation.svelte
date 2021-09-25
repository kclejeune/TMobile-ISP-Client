<script lang="ts">
  import StatusList from '$lib/components/ui/StatusList.svelte';
  import WidgetCard from '$lib/components/ui/WidgetCard.svelte';
  import type { UsageStats } from '$lib/types';
  import Alert from '$lib/components/ui/Alert.svelte';

  export let usage: UsageStats;
  export let title: string;
  function convertUsage(bytes: number, precision: number = 3) {
    let val: number;
    let suffix: string;
    if (bytes < 1024) {
      val = bytes;
      suffix = 'B';
    } else if (bytes < 1024 ** 2) {
      val = bytes / 1024;
      suffix = 'KB';
    } else if (bytes < 1024 ** 3) {
      val = bytes / 1024 ** 2;
      suffix = 'MB';
    } else if (bytes < 1024 ** 4) {
      val = bytes / 1024 ** 3;
      suffix = 'GB';
    } else {
      val = bytes / 1024 ** 4;
      suffix = 'TB';
    }

    return `${val.toFixed(precision)} ${suffix}`;
  }

  export let online: boolean;

  $: statusItems = [
    {
      name: 'Download',
      value: convertUsage(usage.BytesReceived),
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13l-5 5m0 0l-5-5m5 5V6" />
</svg>`,
    },
    {
      name: 'Upload',
      value: convertUsage(usage.BytesSent),
      svgIcon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
</svg>`,
    },
  ];
</script>

<WidgetCard {title}>
  <div slot="body">
    {#if online}
      <StatusList items={statusItems} />
    {:else}
      <Alert type="alert-error" msg="Not Connected" />
    {/if}
  </div>
</WidgetCard>
