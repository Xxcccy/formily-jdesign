import { composeExport, transformComponent } from '../__builtins__'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '../preview-text'
import { JdInput } from '@jd/jdesign-vue'

export type InputProps = typeof JdInput

const TransformJdInput = transformComponent<InputProps>(JdInput, {
  change: 'update:modelValue',
})

const InnerInput = connect(
  TransformJdInput,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
  }),
  mapReadPretty(PreviewText.Input)
)

const TextArea = connect(
  InnerInput,
  mapProps((props) => {
    return {
      ...props,
      type: 'textarea',
    }
  }),
  mapReadPretty(PreviewText.Input)
)

export const Input = composeExport(InnerInput, {
  TextArea,
})

export default Input
