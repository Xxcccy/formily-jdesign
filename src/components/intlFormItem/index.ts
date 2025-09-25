import { connect, mapProps } from '@formily/vue'
import { FormItem } from '../../formily-dongdesign'

const IntlFormItem = connect(
  FormItem,
  mapProps(({ labelWrap, labelWidth, labelAlign, ...props }) => {
    return {
      ...props,
      labelWrap: true,
      labelAlign: 'left',
      style: {
        margin: '0 50px',
      },
    }
  }),
)

export default IntlFormItem
