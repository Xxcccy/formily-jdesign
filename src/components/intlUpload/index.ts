import { connect, mapProps } from '@formily/vue'
import Upload from './index.vue'
import { mapVModel } from '../../utils'

const IntlUpload = connect(Upload, mapProps(mapVModel))

export default IntlUpload
