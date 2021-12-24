<script>
  let submitStatus

  const handleSubmit = async data => {
    submitStatus = 'submitting'

    const formData = new FormData(data.currentTarget)

    const response = await fetch('/api/form.json', {
      method: 'POST',
      body: formData,
    })

    const { message } = await response.json()

    submitStatus = message
  }
</script>

<main>
  <img src="logo.png" alt="logo" />
  {#if submitStatus === 'submitting'}
    <p>Submitting...</p>
  {:else if submitStatus === 'failed'}
    <p>Something went wrong. :-(</p>
  {:else if submitStatus === 'success'}
    <p>Form submitted successfully.</p>
  {:else}
    <form on:submit|preventDefault={handleSubmit}>
      <div>
        <label for="investmentGroupName">
          Name of Investment Group
          <input type="text" name="investmentGroupName" required />
        </label>
      </div>
      <div>
        <label for="preferToPayBy">
          I prefer to be paid by:
          <select name="preferToPayBy" required>
            <option selected="true" disabled="disabled">Select one...</option>
            <option>ACH</option>
            <option>Wire (Includes $30 fee)</option>
            <option>Check</option>
          </select>
        </label>
      </div>
      <div>
        <label for="formOfAccount">
          Form of Account:
          <select name="formOfAccount">
            <option selected="true" disabled="disabled">Select one...</option>
            <option>Business</option>
            <option>Individual</option>
          </select>
        </label>
      </div>
      <div>
        <label for="businessName">
          Business Name (if applicable)
          <input type="text" name="businessName" required />
        </label>
      </div>
      <div>
        <label for="firstName">
          First Name
          <input type="text" name="firstName" required />
        </label>
      </div>
      <div>
        <label for="lastName">
          Last Name
          <input type="text" name="lastName" required />
        </label>
      </div>
      <div>
        <label for="address1">
          Address 1
          <input type="text" name="address1" required />
        </label>
      </div>
      <div>
        <label for="address2">
          Address 2
          <input type="text" name="address2" />
        </label>
      </div>
      <div>
        <label for="city">
          City
          <input type="text" name="city" required />
        </label>
      </div>
      <div>
        <label for="state">
          State
          <select name="state" required>
            <option selected="true" disabled="disabled">Select one...</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
        </label>
      </div>
      <div>
        <label for="zip">
          Zip Code
          <input type="text" name="zip" required />
        </label>
      </div>
      <div>
        <label for="phone">
          Phone
          <input type="phone" name="phone" required />
        </label>
      </div>
      <div>
        <label for="email">
          Email
          <input type="email" name="email" required />
        </label>
      </div>
      <div>
        <label for="bankName">
          Bank Name
          <input type="text" name="bankName" required />
        </label>
      </div>
      <div>
        <label for="routing">
          Routing Number (or ACH #)
          <input type="text" name="routing" required />
        </label>
      </div>
      <div>
        <label for="accountNumber">
          Account Number (or ACH #)
          <input type="text" name="accountNumber" required />
        </label>
      </div>
      <div>
        <label for="accountType">
          Account Type:
          <select name="accountType" required>
            <option selected="true" disabled="disabled">Select one...</option>
            <option>Checking</option>
            <option>Savings</option>
          </select>
        </label>
      </div>
      <div class="checkbox">
        <input type="checkbox" name="isFee" required /><label
          class="checkbox-label"
          for="isFee"
          >I agree to any reasonable fees associated with sending a direct
          payment to my bank not to exceed $30 total per transfer (up to $10 for
          ACH and $30 for Wires Transfers)</label
        >
      </div>
      <div class="checkbox">
        <input type="checkbox" name="isSeveralDays" required /><label
          class="checkbox-label"
          for="isSeveralDays"
          >I recognize it may take several days to verify my account and banking
          info.</label
        >
      </div>
      <hr />
      <div>
        <label for="authorize">
          By Initialing here, I authorize the Manager to use this information
          confidentially to enable payments of distributions to my account. No
          other actions will be taken with this information.
          <input
            class="authorize"
            type="text"
            name="authorize"
            placeholder="Your initials here..."
            required
          />
        </label>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  {/if}
</main>

<style>
  main {
    width: 450px;
    margin: 2rem auto;
    padding: 1rem 0.5rem;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #424242;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
  img {
    display: block;
    width: 95%;
    margin: auto;
    border-radius: 4px;
  }
  div {
    margin: 1rem;
  }
  label,
  input,
  select {
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 4px;
  }
  label {
    font-weight: 600;
    line-height: 1.25rem;
  }
  input,
  select {
    margin-top: 0.25rem;
    border: 1px solid #ddd;
    font-size: 16px;
    outline: #30639c;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
  .checkbox {
    display: flex;
    gap: 25px;
    padding: 1rem;
  }
  .checkbox input {
    width: 50px;
    height: 50px;
    margin: 0;
    flex: 1;
    box-shadow: none;
  }
  .checkbox label {
    flex: 9;
    padding: 6px;
  }
  hr {
    margin: 2rem 1rem;
    border-color: #eee;
  }
  .authorize {
    margin: 1rem auto;
  }
  input[type='submit'] {
    padding: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
    background: #30639c;
    color: white;
    transition: transform 200ms ease-in-out;
    cursor: pointer;
  }
  input[type='submit']:hover {
    transform: scale(0.98);
  }
  p {
    margin: 2rem auto 1rem;
    text-align: center;
    font-size: 2rem;
  }

  @media screen and (max-width: 600px) {
    main {
      width: 100%;
    }
  }
</style>
