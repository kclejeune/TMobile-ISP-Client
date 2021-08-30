<script lang="ts" context="module">
  import { Endpoint } from '$lib/types';
  import type { RadioStatusResponse } from '$lib/types';
  export async function load({ fetch }) {
    const sim: RadioStatusResponse = await fetch(
      `/api/${Endpoint.RADIO_CONFIG}`,
    ).then((res: Response) => res.json());

    return {
      props: {},
    };
  }
</script>
