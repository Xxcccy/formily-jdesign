import Select from './index.vue'
import { connect, mapProps } from '@formily/vue'
import { mapVModel } from '../../utils'

const IntlSelect = connect(Select, mapProps(mapVModel))

export default IntlSelect
