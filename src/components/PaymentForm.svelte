<script>
  import PayPalButtons from "../shared/PayPalButtons.svelte";

  $: countryCode = "";

  const changeHandler = async () => {
    console.log(`countryCode: ${countryCode}`);
  };
</script>

<form on:change={changeHandler}>
  <div class="form-field">
    <label for="countries">Choose a country</label>
    <select name="countries" id="countries" bind:value={countryCode}>
      <option value="DE">Germany</option>
      <option value="IR">Iran</option>
      <option value="MX">Mexico</option>
      <option value="NL">Netherlands</option>
      <option value="PL">Poland</option>
      <option value="US">United States</option>
    </select>
  </div>
</form>

<div class="paypal-buttons-wrapper">
  <div class="paypal-country">Current country selected: {countryCode || 'No country'}</div>

  <PayPalButtons countryCode={countryCode}/>
</div>

<style>
  form {
    width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  .paypal-buttons-wrapper {
    text-align: center;
  }
  select {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .paypal-country {
    margin-bottom: 18px;
  }
</style>
