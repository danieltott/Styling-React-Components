import React from 'react'
import useForm from './useForm'
import Button from './Button'
import InputGroup from './InputGroup'
import FormActions from './FormActions'
import Alert from './Alert'
import Main from './Main'

export default function App() {
  const { name, comment, form, reset, state } = useForm()

  if (state.submitted && !state.formError) {
    return (
      <Main>
        <h1>Thank you!</h1>
        <Alert variant="success">Your message has been received.</Alert>
        <div>
          <Button onClick={reset} variant="secondary">
            Send Another Message
          </Button>
        </div>
      </Main>
    )
  }

  return (
    <Main>
      <h1>Please fill out our form</h1>
      {state.submitted && state.formError && (
        <Alert variant="danger">Looks like there was an issue...</Alert>
      )}
      <form {...form}>
        <InputGroup error={name.error}>
          <label htmlFor="name">Name:</label>
          <input
            autoComplete="off"
            type="text"
            id="name"
            placeholder="Enter your name"
            {...name.input}
          />
        </InputGroup>

        <InputGroup error={comment.error}>
          <label htmlFor="comment">Comment:</label>
          <textarea
            autoComplete="off"
            id="comment"
            placeholder="Enter your comment"
            {...comment.input}
          />
        </InputGroup>

        <FormActions>
          <Button
            variant="danger"
            disabled={state.formIsLoading}
            onClick={reset}
          >
            Reset Form...
          </Button>
          <Button
            type="submit"
            size="lg"
            disabled={state.submitIsDisabled}
            loading={state.formIsLoading}
          >
            {state.formIsLoading ? 'Submitting...' : 'Submit Form!'}
          </Button>
        </FormActions>
      </form>
    </Main>
  )
}
