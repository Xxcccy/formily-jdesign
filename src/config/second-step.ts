import IntlFormItem from '../components/intlFormItem'
import IntlSelectModel from '../components/intlSelectModel'
import { FormStep } from '../formily-dongdesign'

const components = {
  FormStep,
  IntlSelectModel,
  IntlFormItem,
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
      'x-component': 'Input',
    },
  },
}

export const businessInformationConfig = Object.assign(
  config,
  { components },
  { scopes },
)
