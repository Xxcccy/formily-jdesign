import { connect, mapProps } from '@formily/vue'
import Owner from './index.vue'
import { mapVModel } from '../../utils'

const IntlOwner = connect(Owner, mapProps(mapVModel))

export default IntlOwner
