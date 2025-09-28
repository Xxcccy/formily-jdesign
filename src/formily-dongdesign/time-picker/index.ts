import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { PreviewText } from '../preview-text'
import { JdTimePicker } from '@jd/jdesign-vue'

export type TimePickerProps = typeof JdTimePicker

const TransformJdTimePicker = transformComponent<TimePickerProps>(
  JdTimePicker,
  {
    change: 'update:modelValue',
  },
)

export const TimePicker = connect(
  TransformJdTimePicker,
  mapProps({ readOnly: 'readonly', value: 'modelValue' }),
  mapReadPretty(PreviewText.TimePicker),
)

export default TimePicker
