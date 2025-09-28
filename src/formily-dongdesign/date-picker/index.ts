import { transformComponent } from '../__builtins__/shared'
import { connect, mapProps, mapReadPretty } from '@formily/vue'
import { JdDatePicker } from '@jd/jdesign-vue'

import { PreviewText } from '../preview-text'

export type DatePickerProps = typeof JdDatePicker

const TransformJdDatePicker = transformComponent<DatePickerProps>(
  JdDatePicker,
  {
    change: 'update:modelValue',
  },
)

const getDefaultFormat = (props: DatePickerProps, formatType = 'format') => {
  const type = props.type

  if (type === 'week' && formatType === 'format') {
    return '[Week] ww'
  } else if (type === 'month') {
    return 'YYYY-MM'
  } else if (type === 'year') {
    return 'YYYY'
  } else if (type === 'datetime' || type === 'datetimerange') {
    return 'YYYY-MM-DD HH:mm:ss'
  }

  return 'YYYY-MM-DD'
}

export const DatePicker = connect(
  TransformJdDatePicker,
  mapProps(
    {
      value: 'modelValue',
      readOnly: 'readonly',
    },
    (props: any) => {
      return {
        ...props,
        format: props.format || getDefaultFormat(props),
        valueFormat:
          props.valueFormat || getDefaultFormat(props, 'valueFormat'),
      }
    },
  ),
  mapReadPretty(PreviewText.DatePicker),
)

export default DatePicker
