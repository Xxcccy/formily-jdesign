import { Field } from '@formily/core'
import { ISchema, SchemaEnum, SchemaTypes } from '@formily/vue'
import IntlFormItem from '../components/intlFormItem'
import IntlInput from '../components/intlInput'
import IntlSelect from '../components/intlSelect'
import IntlSelectModel from '../components/intlSelectModel'
import IntlTitle from '../components/intlTitle'
import IntlUpload from '../components/intlUpload'
import { SchemaTypesEnum } from '../constants'
import { FormItemProps, FormLayout } from '../formily-dongdesign'
import IntlOwner from '../components/intlUltimateBeneficialOwner'

interface CommonConfig {
  type?: SchemaTypes
  title?: string
  description?: string
  decoratorProps?: FormItemProps
  componentProps?: ISchema['x-component-props']
  validator?: (v: unknown) => any
  triggerType?: 'onInput' | 'onFocus' | 'onBlur'
  reactions?: (field: Field) => void
  contentSlots?: any
}

interface SelectConfig extends CommonConfig {
  options?: SchemaEnum<any>
  datasource?: Array<{ label: string; value: any; [key: string]: any }>
}

export function useCreate() {
  const title = (content: string, size: string = 'normal'): ISchema => {
    return {
      type: SchemaTypesEnum.VOID,
      'x-component': IntlTitle,
      'x-content': content,
      'x-component-props': {
        size,
      },
    }
  }

  const input = ({
    title,
    description,
    decoratorProps,
    componentProps,
    validator = () => {},
    triggerType,
    reactions,
  }: CommonConfig): ISchema => {
    return {
      type: SchemaTypesEnum.STRING,
      title,
      description,
      'x-decorator': IntlFormItem,
      'x-component': IntlInput,
      'x-decorator-props': decoratorProps,
      'x-component-props': componentProps,
      'x-validator': {
        triggerType,
        validator,
      },
      'x-reactions': reactions,
    }
  }

  const select = ({
    type,
    title,
    options,
    description,
    decoratorProps,
    componentProps,
  }: SelectConfig): ISchema => {
    return {
      type,
      title,
      description,
      'x-decorator': IntlFormItem,
      'x-component': IntlSelect,
      'x-decorator-props': decoratorProps,
      'x-component-props': componentProps,
      enum: options,
    }
  }

  const selectModel = (type: SchemaTypes): ISchema => {
    return {
      type,
      title: '',
      'x-decorator': IntlFormItem,
      'x-component': IntlSelectModel,
    }
  }

  const upload = ({
    type = SchemaTypesEnum.ARRAY,
    title,
    componentProps,
  }: CommonConfig): ISchema => {
    return {
      type,
      title,
      'x-decorator': IntlFormItem,
      'x-component': IntlUpload,
      'x-component-props': {
        listType: 'picture-card',
        ...componentProps,
      },
    }
  }

  const formLayout = ({
    type = SchemaTypesEnum.VOID,
    componentProps,
  }: CommonConfig): ISchema => {
    return {
      type,
      'x-component': FormLayout,
      'x-component-props': componentProps,
    }
  }

  const owner = ({
    type = SchemaTypesEnum.ARRAY,
    componentProps = {},
  }): ISchema => {
    return {
      type,
      'x-component': IntlOwner,
      "x-decorator": IntlFormItem,
      'x-component-props': componentProps,
    }
  }

  return {
    input,
    title,
    select,
    selectModel,
    upload,
    formLayout,
    owner,
  }
}
