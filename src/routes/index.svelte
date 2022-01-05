<script>
  import Form from '$lib/Form.svelte'
  let submitStatus

  $: isShowForm =
    submitStatus !== 'submitting' &&
    submitStatus !== 'failed' &&
    submitStatus !== 'success'

  const handleSubmit = async data => {
    submitStatus = 'submitting'

    const formData = new FormData(data.currentTarget)

    const options = {
      method: 'POST',
      body: formData,
    }

    const response = await fetch('/api/form', options)

    const { message } = await response.json()

    submitStatus = message
  }
</script>

<main>
  <img src="logo.png" alt="logo" />

  <img class="ssl" src="ssl.svg" alt="Secure Payment Form" />

  {#if submitStatus === 'submitting'}
    <p>Submitting...</p>
  {/if}

  {#if submitStatus === 'failed'}
    <p>Something went wrong. :-(</p>
  {/if}

  {#if submitStatus === 'success'}
    <p>Form submitted successfully.</p>
  {/if}

  {#if isShowForm}
    <Form {handleSubmit} />
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
  .ssl {
    width: 50%;
    margin-top: 2rem;
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
