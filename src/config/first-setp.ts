import type { ISchema } from '@formily/vue'
import { useCreate } from '../hooks'

const title1 = 'Invitation Code'
const description1 = `Joybuy is currently an invitation-only platform. If you're interested in joining, please send an email to`

const title2 = 'Country / Region of Registration'
const description2 = `Joybuy only accepts standard corporate legal entities. Individual merchants and sole proprietorships are currently not eligible to register as sellers.`
const options = [
  {
    label: 'China Mainland',
    value: 1,
  },
  {
    label: 'Hong Kong, China',
    value: 2,
  },
  {
    label: 'United Kingdom',
    value: 3,
  },
]

const create = useCreate()

export const sellerInformationConfig: ISchema = {
  ...create.stepPane('object', 'Seller Information'),
  properties: {
    invitationCode: create.input({
      title: title1,
      description: description1,
      componentProps: { maxlength: 10 },
    }),
    legalEntityType: {
      type: 'object',
      properties: {
        subTitle: create.title('Legal Entity Type'),
        region: create.select('string', title2, options, description2, {
          labelWrap: true,
          labelAlign: 'right',
        }),
      },
    },
    companyInformation: {
      type: 'object',
      properties: {
        subTitle: create.title('Company Information'),
        certificate: {
          type: 'array',
          title: 'Certifivate of Business',
          'x-decorator': 'IntlFormItem',
          'x-component': 'IntlUpload',
          'x-component-props': {
            listType: 'picture-card',
            action: 'https://feqd-ftf.jd.com/api/jdesign/upload',
          },
        },
      },
    },
  },
}
