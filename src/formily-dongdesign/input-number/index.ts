import { transformComponent } from '../__builtins__'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { JdInputNumber } from '@jd/jdesign-vue'
import { PreviewText } from '../preview-text'

export type InputNumberProps = typeof JdInputNumber

const TransformJdInputNumber = transformComponent<InputNumberProps>(
  JdInputNumber,
  {
    change: 'update:modelValue',
  }
)

export const InputNumber = connect(
  TransformJdInputNumber,
  mapProps(
    {
      value: 'modelValue',
      readOnly: 'readonly',
    },
    (props) => {
      let controlsPosition = 'right'
      if (props.controlsPosition) {
        controlsPosition = props.controlsPosition
      }
      return {
        controlsPosition,
        modelValue: props.modelValue,
      }
    }
  ),
  mapReadPretty(PreviewText.Input)
)

export default InputNumber
