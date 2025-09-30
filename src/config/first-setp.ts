import { type ISchema } from '@formily/vue'
import IntlCard from '../components/intlCard'
import { SchemaTypesEnum } from '../constants'
import { useCreate } from '../hooks'

const title1 = 'Invitation Code'
const description1 = `Joybuy is currently an invitation-only platform. If you're interested in joining, please send an email to`
const checkInvitationCode = (value: any) => {
  if (!value) return 'input something'
  return true
}

const title2 = 'Country / Region of Registration'
const description2 = `Joybuy only accepts standard corporate legal entities. Individual merchants and sole proprietorships are currently not eligible to register as sellers.`
const options = [
  {
    label: 'China Mainland',
    value: 1,
    icon: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  },
  {
    label: 'Hong Kong, China',
    value: 2,
    icon: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  },
  {
    label: 'United Kingdom',
    value: 3,
    icon: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  },
]

const create = useCreate()

export const sellerInformationConfig: ISchema['properties'] = {
  sellerInformation: {
    type: SchemaTypesEnum.VOID,
    properties: {
      card_1: {
        type: SchemaTypesEnum.VOID,
        'x-decorator': IntlCard,
        properties: {
          title_1: create.title('Seller Information', 'large'),
          title_2: create.title('Invitation Code'),
          invitationCode: create.input({
            title: title1,
            description: description1,
            triggerType: 'onBlur',
            validator: checkInvitationCode,
            componentProps: { maxlength: 10 },
          }),
        },
      },
      companyInformation: {
        type: SchemaTypesEnum.OBJECT,
        'x-decorator': IntlCard,
        properties: {
          subTitle: create.title('Company Information', 'large'),
          owner: create.owner({
            componentProps: {
              formItemGroup: [
                {
                  component: 'SELECT',
                  label: 'ID Type',
                  code: 'idType',
                  options: options,
                  style: {
                    width: '418px',
                  },
                },
                {
                  component: 'SELECT',
                  label: 'Certificate of Business',
                  code: 'certificate',
                  options: options,
                  style: {
                    width: '418px',
                  },
                },
                {
                  component: 'UPLOAD',
                  label: 'photo',
                  code: 'photo',
                  extra: 'Only supports jpg, jpeg, max size 8MB.',
                  action: 'https://feqd-ftf.jd.com/api/jdesign/upload',
                },
                {
                  component: 'INPUT',
                  label: 'fullName',
                  code: 'fullName',
                  style: {
                    width: '100%',
                  },
                },
              ],
            },
          }),
        },
      },
    },
  },
}
