import { FormStep } from '../formily-dongdesign'
import IntlFormItem from '../components/intlFormItem'

const components = {
  FormStep,
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
      'x-component': 'Input',
    },
  },
}

export const sellerReviewConfig = Object.assign(
  config,
  { components },
  { scopes },
)
