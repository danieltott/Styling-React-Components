import { useReducer, useCallback } from 'react'
import { submitForm } from './Api'

const initialState = {
  name: {
    value: '',
    error: null,
  },
  comment: {
    value: '',
    error: null,
  },
  formIsLoading: false,
  submitIsDisabled: true,
  submitted: false,
  formError: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'UpdateValue':
      const newInputObject = {
        value: action.value,
        error: action.value ? null : 'This field is required',
      }
      const newState = {
        ...state,
        [action.input]: newInputObject,
      }
      const submitIsDisabled = !(newState.name.value && newState.comment.value)

      return {
        ...newState,
        submitIsDisabled,
      }

    case 'ResetForm':
      return {
        ...initialState,
      }

    case 'SubmitForm':
      return {
        ...state,
        submitted: false,
        submitIsDisabled: true,
        formIsLoading: true,
        formError: null,
      }

    case 'FormError':
      const errorState = {
        ...state,
        formIsLoading: false,
        submitted: true,
        formError: true,
      }

      if (action.errors.name) {
        errorState.name.error = action.errors.name
      }

      return errorState

    case 'FormSuccess':
      return {
        ...state,
        formIsLoading: false,
        submitted: true,
      }

    default:
      throw new Error(`Unkown action type: ${action.type}`)
  }
}

const useForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const startSubmit = useCallback(async state => {
    dispatch({ type: 'SubmitForm' })
    const result = await submitForm(state)
    if (result.success) {
      dispatch({ type: 'FormSuccess' })
    } else {
      dispatch({ type: 'FormError', errors: result.errors })
    }
  }, [])

  return {
    name: {
      input: {
        value: state.name.value,
        onChange: e => {
          dispatch({
            type: 'UpdateValue',
            input: 'name',
            value: e.target.value,
          })
        },
      },
      error: state.name.error,
    },
    comment: {
      input: {
        value: state.comment.value,
        onChange: e => {
          dispatch({
            type: 'UpdateValue',
            input: 'comment',
            value: e.target.value,
          })
        },
      },
      error: state.comment.error,
    },
    form: {
      onSubmit: e => {
        e.preventDefault()
        startSubmit(state)
      },
      onKeyDown: e => {
        if (e.keyCode === 13 && e.metaKey) {
          startSubmit(state)
        }
      },
    },
    reset: () => {
      dispatch({ type: 'ResetForm' })
    },
    state,
  }
}

export default useForm
