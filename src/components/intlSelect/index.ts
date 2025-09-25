import { connect, mapProps } from '@formily/vue'
import { Select } from '../../formily-dongdesign'

const IntlSelect = connect(
  Select,
  mapProps(({ style, ...props }) => {
    return {
      ...props,
      style: {
        width: '100%',
      },
    }
  }),
)

export default IntlSelect
