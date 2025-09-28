import type { Field } from '@formily/core'
import type { ISchema } from '@formily/vue'
import { useCreate } from '../hooks'
import { SchemaTypesEnum } from '../constants'

const reactions = (field: Field) => {
  field.visible =
    field.form.fields['step.businessInformation.optionsModel']['value']
      ?.name === 'FLEX POP1'
}

const create = useCreate()

export const businessInformationConfig: ISchema = {
  type: 'object',
  'x-component': 'FormStep.StepPane',
  'x-component-props': {
    title: 'Business Information',
  },
  properties: {
    optionsModel: create.selectModel(SchemaTypesEnum.OBJECT),
    ttt: create.input({ title: 'TTT', reactions }),
  },
}
