import React, { lazy, Suspense } from 'react'
import useForm from './useForm'
import Button from './Button'
import InputGroup from './InputGroup'
import FormActions from './FormActions'
import Alert from './Alert'
import Main from './Main'
import './styles.scss'

const ThankYou = lazy(() => import('./ThankYou'))

export default function App() {
  const { name, phone, comment, form, reset, state } = useForm()

  if (state.submitted && !state.formError) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ThankYou reset={reset} />
      </Suspense>
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
            className={`form-control ${name.error ? 'is-invalid' : ''}`}
            aria-invalid={name.error ? 'true' : 'false'}
            required
            {...name.input}
          />
        </InputGroup>
        <InputGroup error={phone.error}>
          <label htmlFor="phone">Phone:</label>
          <input
            autoComplete="off"
            type="text"
            id="phone"
            className="form-control"
            placeholder="Optional - Enter your phone number"
            {...phone.input}
          />
        </InputGroup>

        <InputGroup error={comment.error}>
          <label htmlFor="comment">Comment:</label>
          <textarea
            autoComplete="off"
            id="comment"
            placeholder="Enter your comment"
            className={`form-control ${comment.error ? 'is-invalid' : ''}`}
            aria-invalid={comment.error ? 'true' : 'false'}
            required
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
            {state.formIsLoading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            {state.formIsLoading ? 'Submitting...' : 'Submit Form!'}
          </Button>
        </FormActions>
      </form>
    </Main>
  )
}
