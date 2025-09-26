import { Field } from '@formily/core'
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

const reactions = (field: Field) => {
  field.visible =
    field.form.fields['step.businessInformation.optionsModel']['value']
      ?.name === 'FLEX POP1'
}

const scopes = { reactions }

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
      'x-reactions': '{{reactions}}',
    },
  },
}

export const businessInformationConfig = Object.assign(
  { config },
  { components },
  { scopes },
)
