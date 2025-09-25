import IntlFormItem from '../components/intlFormItem'
import IntlInput from '../components/intlInput'
import { FormStep } from '../formily-dongdesign'

const components = {
  FormStep,
  IntlInput,
  IntlFormItem,
}

const scopes = {}

const config = {
  type: 'object',
  'x-component': 'FormStep.StepPane',
  'x-component-props': {
    title: 'Seller Review',
  },
  properties: {
    ccc: {
      type: 'string',
      title: 'CCC',
      'x-decorator': 'IntlFormItem',
      'x-component': 'IntlInput',
    },
  },
}

export const sellerReviewConfig = Object.assign(
  { config },
  { components },
  { scopes },
)
