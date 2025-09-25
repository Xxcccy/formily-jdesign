import { connect, mapProps } from '@formily/vue'
import { JdInput } from '@jd/jdesign-vue'
import { mapVModel } from '../../utils'

const IntlInput = connect(JdInput, mapProps(mapVModel))

export default IntlInput
