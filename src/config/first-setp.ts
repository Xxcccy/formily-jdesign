import IntlFormItem from '../components/intlFormItem'
import IntlInput from '../components/intlInput'
import IntlSelect from '../components/intlSelect'
import IntlUpload from '../components/intlUpload'
import IntlTitle from '../components/intlTitle'
import { FormStep } from '../formily-dongdesign'

// 注册组件
const components = {
  IntlTitle,
  FormStep,
  IntlInput,
  IntlSelect,
  IntlUpload,
  IntlFormItem,
}

const title = 'Invitation Code'

// 注册 config 配置中会被用到的变量(在 properties 中使用的)。
// 但由于是全局范围内的注册，在其他配置子项中也可被引用。
// 例如：title: '{{title}}'
const scopes = {
  title,
}

const invitationCodeValidator = (value) => {
  doSomething(value)

  if (!value) return 'please input something'
  return true
}

const doSomething = (value) => {
  console.log(value)
}

const config = {
  type: 'object',
  'x-component': 'FormStep.StepPane',
  'x-component-props': {
    title: 'Seller Information',
  },
  properties: {
    invitationCode: {
      type: 'string',
      title: '{{title}}',
      description: `Joybuy is currently an invitation-only platform. 
        If you're interested in joining, please send an email to `,
      'x-decorator': 'IntlFormItem',
      'x-component': 'IntlInput',
      'x-validator': {
        triggerType: 'onBlur',
        validator: invitationCodeValidator,
      },
      'x-decorator-props': {
        asterisk: true,
      },
      'x-component-props': {
        maxlength: 5,
      },
    },
    legalEntityType: {
      type: 'object',
      properties: {
        subTitle: {
          type: 'void',
          'x-component': 'IntlTitle',
          'x-content': 'Legal Entity Type',
        },
        region: {
          type: 'string',
          title: 'Country / Region of Registration',
          description: `Joybuy only accepts standard corporate legal entities. 
            Individual merchants and sole proprietorships are currently not eligible to register as sellers.`,
          'x-decorator': 'IntlFormItem',
          'x-component': 'IntlSelect',
          enum: [
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
          ],
        },
      },
    },
    companyInformation: {
      type: 'object',
      properties: {
        subTitle: {
          type: 'void',
          'x-component': 'IntlTitle',
          'x-content': 'Company Information',
        },
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

export const sellerInformationConfig = Object.assign(
  config,
  { components },
  { scopes },
)
