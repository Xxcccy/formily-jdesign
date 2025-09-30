import { Form } from '@formily/core'
import { nextTick } from 'vue'
import { scrollToField } from './scrollToField'

export const setFieldError = (form: Form, field: string, message: string) => {
  form.setFieldState(field, (state) => {
    state.feedbacks = [
      {
        type: 'error',
        code: 'ValidateError',
        messages: [message],
      },
    ]
  })

  nextTick(() => {
    scrollToField()
  })
}
