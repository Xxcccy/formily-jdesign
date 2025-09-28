import { connect, mapProps } from '@formily/vue'

import { JdTransfer } from '@jd/jdesign-vue'

export type TransferProps = typeof JdTransfer

export const Transfer = connect(
  JdTransfer,
  mapProps({ dataSource: 'data', value: 'modelValue' }),
)

export default Transfer
