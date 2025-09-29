import type { ISchema } from '@formily/vue'
import { useCreate } from '../hooks'
import { SchemaTypesEnum } from '../constants'
import IntlCard from '../components/intlCard'

const create = useCreate()

export const sellerReviewConfig: ISchema['properties'] = {
  sellerReview: {
    type: SchemaTypesEnum.OBJECT,
    'x-decorator': IntlCard,
    properties: {
      ccc: create.input({ title: 'ccc' }),
    },
  },
}
