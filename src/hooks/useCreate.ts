import { ISchema, SchemaEnum, SchemaReaction, SchemaTypes } from '@formily/vue'
import { FormItemProps, FormStep, IFormStep } from '../formily-dongdesign'
import { components } from '../utils'
import { Field } from '@formily/core'

interface CommonConfig {
  type?: SchemaTypes
  title?: string
  description?: string
  decoratorProps?: FormItemProps
  componentProps?: ISchema['x-component-props']
  validator?: (v: unknown) => any
  triggerType?: 'onInput' | 'onFocus' | 'onBlur'
  reactions?: (field: Field) => void
}

interface SelectConfig extends CommonConfig {
  options: SchemaEnum<any>
}

interface Step {
  formStepInstance: IFormStep
  schema: ISchema
}

export function useCreate() {
  const scope = {}

  const title = (content: string): ISchema => {
    return {
      type: 'void',
      'x-component': 'IntlTitle',
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
      type: 'string',
      title,
      description,
      'x-decorator': 'IntlFormItem',
      'x-component': 'IntlInput',
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
      'x-decorator': 'IntlFormItem',
      'x-component': 'IntlSelect',
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

    const schema = {
      type: type,
      'x-component': 'FormStep',
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
      'x-decorator': 'IntlFormItem',
      'x-component': 'IntlSelectModel',
    }
  }

  const upload = ({
    type = 'array',
    title,
    componentProps,
  }: CommonConfig): ISchema => {
    return {
      type,
      title,
      'x-decorator': 'IntlFormItem',
      'x-component': 'IntlUpload',
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
