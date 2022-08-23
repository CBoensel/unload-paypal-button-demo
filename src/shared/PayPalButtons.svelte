<script>
  import { initPayPalButtons } from "./paypal.js"

  export let countryCode = '';

  const clientID = "test";
  const containerID = "#paypal-buttons";
  const cartTotal = 0.01;

  $: if (countryCode !== "IR") {
    initPayPalButtons(clientID, containerID, cartTotal, countryCode);
  }
</script>

{#if countryCode !== "IR"}
  <div class="paypal-buttons" id="paypal-buttons"></div>
{:else}
  <div class="paypal-unavailable">PayPal is not available in your country</div>
{/if}

<style>
  .paypal-unavailable {
    margin-bottom: 18px;
  }
</style>