import IntlFormItem from '../components/intlFormItem'
import IntlInput from '../components/intlInput'
import IntlSelectModel from '../components/intlSelectModel'
import { FormStep } from '../formily-dongdesign'

const components = {
  FormStep,
  IntlInput,
  IntlFormItem,
  IntlSelectModel,
}

const scopes = {}

const config = {
  type: 'object',
  'x-component': 'FormStep.StepPane',
  'x-component-props': {
    title: 'Business Information',
  },
  properties: {
    optionsModel: {
      type: 'object',
      'x-decorator': 'IntlFormItem',
      'x-component': 'IntlSelectModel',
    },
    bbb: {
      type: 'string',
      title: 'BBB',
      'x-decorator': 'IntlFormItem',
      'x-component': 'IntlInput',
    },
  },
}

export const businessInformationConfig = Object.assign(
  config,
  { components },
  { scopes },
)
