<script lang="ts" context="module">
  const REDIRECT_PAGE = '/overview';
  export async function load() {
    return {
      status: 302,
      redirect: REDIRECT_PAGE,
    };
  }
</script>

<script lang="ts">
  import { goto } from '$app/navigation';
  goto(REDIRECT_PAGE);
</script>
