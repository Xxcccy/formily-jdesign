import type { Field } from '@formily/core'
import type { ISchema } from '@formily/vue'
import IntlCard from '../components/intlCard'
import { SchemaTypesEnum } from '../constants'
import { useCreate } from '../hooks'

const reactions = (field: Field) => {
  field.visible =
    field.form.fields['layout.businessInformation.optionsModel']['value']
      ?.name === 'FLEX POP1'
}

const create = useCreate()

export const businessInformationConfig: ISchema['properties'] = {
  businessInformation: {
    type: SchemaTypesEnum.OBJECT,
    'x-decorator': IntlCard,
    properties: {
      title: create.title('Business Information', 'large'),
      optionsModel: create.selectModel(SchemaTypesEnum.OBJECT),
      ttt: create.input({ title: 'TTT', reactions }),
    },
  },
}
