import { connect, mapProps } from '@formily/vue'
import { mapVModel } from '../../utils'
import SelectModel from './index.vue'

const IntlSelectModel = connect(SelectModel, mapProps(mapVModel))

export default IntlSelectModel
