import React from 'react'
import useForm from './useForm'
import Button from './Button'
import InputGroup from './InputGroup'
import FormActions from './FormActions'
import Alert from './Alert'
import Main from './Main'

export default function App() {
  const { name, phone, comment, form, reset, state } = useForm()

  if (state.submitted && !state.formError) {
    return (
      <Main>
        <h1>Thank you!</h1>
        <Alert variant="success">Your message has been received.</Alert>
        <FormActions>
          <Button onClick={reset} variant="secondary">
            Send Another Message
          </Button>
        </FormActions>
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
          <label
            htmlFor="name"
            style={{
              display: 'block',
              fontWeight: 'bold',
            }}
          >
            Name:
          </label>
          <input
            autoComplete="off"
            type="text"
            id="name"
            placeholder="Enter your name"
            aria-invalid={name.error ? 'true' : 'false'}
            aria-required="true"
            style={{
              marginTop: '0.25em',
              fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
              fontSize: '1rem',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: name.error ? 'red' : '#ccc',
              borderRadius: '5px',
              padding: '0.1875rem',
              width: '100%',
              boxSizing: 'border-box',
            }}
            {...name.input}
          />
        </InputGroup>

        <InputGroup error={phone.error}>
          <label
            htmlFor="phone"
            style={{
              display: 'block',
              fontWeight: 'bold',
            }}
          >
            Phone:
          </label>
          <input
            autoComplete="off"
            type="text"
            id="phone"
            placeholder="Optional - Enter your phone number"
            style={{
              marginTop: '0.25em',
              fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
              fontSize: '1rem',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: phone.error ? 'red' : '#ccc',
              borderRadius: '5px',
              padding: '0.1875rem',
              width: '100%',
              boxSizing: 'border-box',
            }}
            {...phone.input}
          />
        </InputGroup>

        <InputGroup error={comment.error}>
          <label
            htmlFor="comment"
            style={{
              display: 'block',
              fontWeight: 'bold',
            }}
          >
            Comment:
          </label>
          <textarea
            autoComplete="off"
            id="comment"
            placeholder="Enter your comment"
            aria-invalid={comment.error ? 'true' : 'false'}
            aria-required="true"
            style={{
              marginTop: '0.25em',
              fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
              fontSize: '1rem',
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: comment.error ? 'red' : '#ccc',
              borderRadius: '5px',
              padding: '0.1875rem',
              width: '100%',
              boxSizing: 'border-box',
            }}
            {...comment.input}
          />
        </InputGroup>

        <FormActions>
          <Button
            type="reset"
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
