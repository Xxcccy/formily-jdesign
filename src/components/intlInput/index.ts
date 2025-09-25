import { connect, mapProps } from '@formily/vue'
import { mapVModel } from '../../utils'
import Input from './index.vue'

const IntlInput = connect(Input, mapProps(mapVModel))

export default IntlInput
