import { Field } from '@formily/core'
import { ISchema, SchemaEnum, SchemaTypes } from '@formily/vue'
import { SchemaTypesEnum } from '../constants'
import { FormItemProps, FormStep, IFormStep } from '../formily-dongdesign'
import { components } from '../utils'
import IntlTitle from '../components/intlTitle'
import IntlFormItem from '../components/intlFormItem'
import IntlInput from '../components/intlInput'
import IntlSelect from '../components/intlSelect'
import IntlSelectModel from '../components/intlSelectModel'
import IntlUpload from '../components/intlUpload'
import IntlCard from '../components/intlCard'

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

interface Step {
  formStepInstance: IFormStep
  schema: ISchema
}

export function useCreate() {
  const scope = {}

  const title = (content: string): ISchema => {
    return {
      type: SchemaTypesEnum.VOID,
      'x-component': IntlTitle,
      'x-content': content,
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

  const stepPane = (type: SchemaTypes, stepPaneLabel: string): ISchema => {
    return {
      type,
      'x-component': 'FormStep.StepPane',
      'x-component-props': {
        title: stepPaneLabel,
      },
    }
  }

  const formStep = (type: SchemaTypes, componentProps?: any): Step => {
    const formStepInstance = FormStep.createFormStep()
    scope['formStepInstance'] = formStepInstance

    const schema: ISchema = {
      type,
      'x-component': FormStep,
      'x-component-props': {
        formStep: formStepInstance,
        'finish-status': 'success',
        ...componentProps,
      },
    }

    return {
      formStepInstance,
      schema,
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

  return {
    components,
    scope,
    input,
    title,
    select,
    stepPane,
    formStep,
    selectModel,
    upload,
  }
}
