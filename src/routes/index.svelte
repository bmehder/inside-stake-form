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
  <h1>This is not meant to be pretty, yet. 🤡</h1>
  <form on:submit|preventDefault={handleSubmit}>
    <div>
      <label for="investmentGroupName">
        Name of Investment Group
        <input type="text" name="investmentGroupName" />
      </label>
    </div>
    <div>
      <label for="preferToPayBy">
        I prefer to be paid by:
        <select name="preferToPayBy">
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
          <option>Business</option>
          <option>Individual</option>
        </select>
      </label>
    </div>
    <div>
      <label for="businessName">
        Business Name (If applicable)
        <input type="text" name="businessName" />
      </label>
    </div>
    <div>
      <label for="firstName">
        First Name
        <input type="text" name="firstName" />
      </label>
    </div>
    <div>
      <label for="lastName">
        Last Name
        <input type="text" name="lastName" />
      </label>
    </div>
    <div>
      <label for="address1">
        Address 1
        <input type="text" name="address1" />
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
        <input type="text" name="city" />
      </label>
    </div>
    <div>
      <label for="state">
        State
        <select name="state">
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
        <input type="text" name="zip" />
      </label>
    </div>
    <div>
      <label for="phone">
        Phone
        <input type="phone" name="phone" />
      </label>
    </div>
    <div>
      <label for="email">
        Email
        <input type="email" name="email" />
      </label>
    </div>
    <div>
      <label for="bankName">
        Bank Name
        <input type="text" name="bankName" />
      </label>
    </div>
    <div>
      <label for="routing">
        Routing Number (or ACH Number)
        <input type="text" name="routing" />
      </label>
    </div>
    <div>
      <label for="accountNumber">
        Account Number (or ACH Number)
        <input type="text" name="accountNumber" />
      </label>
    </div>
    <div>
      <label for="accountType">
        Account Type:
        <select name="accountType">
          <option>Checking</option>
          <option>Savings</option>
        </select>
      </label>
    </div>
    <div>
      <input type="checkbox" name="isFee" required /><label for="isFee"
        >I agree to any reasonable fees associated with sending a direct payment
        to my bank not to exceed $30 total per transfer (up to $10 for ACH and
        $30 for Wires Transfers)</label
      >
    </div>
    <div>
      <input type="checkbox" name="isSeveralDays" required /><label
        for="isSeveralDays"
        >I recognize it may take several days to verify my account and banking
        info.</label
      >
    </div>
    <div>
      <input type="checkbox" name="isAuthorize" /><label for="isAuthorize"
        >By Initialing here I authorize the Manager to use this information
        confidentially to enable payments of distributions to my account. No
        other actions will be taken with this information.</label
      >
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
</main>

<style>
  main {
    width: 600px;
    margin: 4rem auto;
  }
  div {
    margin: 1rem;
  }
</style>
