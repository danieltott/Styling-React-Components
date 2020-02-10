function sleep(ms = 500) {
  return new Promise(function(resolve) {
    return setTimeout(resolve, ms)
  })
}

export const submitForm = async formData => {
  await sleep(2000)
  if (formData.name.value === 'error') {
    return {
      success: false,
      errors: {
        name: 'Invalid name',
      },
    }
  }

  return {
    success: true,
  }
}
