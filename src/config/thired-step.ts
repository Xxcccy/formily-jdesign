import type { ISchema } from '@formily/vue'
import { useCreate } from '../hooks'

const create = useCreate()

export const sellerReviewConfig: ISchema = {
  type: 'object',
  'x-component': 'FormStep.StepPane',
  'x-component-props': {
    title: 'Seller Review',
  },
  properties: {
    ccc: create.input({ title: 'ccc' }),
  },
}
