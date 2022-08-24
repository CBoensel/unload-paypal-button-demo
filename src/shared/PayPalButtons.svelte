<script>
  import { initPayPalButtons } from "./paypal.js"

  export let countryCode = '';

  const clientID = "test";
  const containerID = "#paypal-buttons";
  const cartTotal = 0.01;
  let paypal = null;

  const isPromise = (arg) => typeof arg === 'object' && typeof arg.then === 'function';

  $: if (countryCode !== "IR") {
    paypal = initPayPalButtons(clientID, containerID, cartTotal, countryCode);
  } else if (paypal && !isPromise(paypal)) {
    // optional, but probably cleaner to remove everything
    paypal.destroyAll();
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