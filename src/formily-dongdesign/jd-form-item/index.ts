import { isVoidField } from '@formily/core'
import { connect, mapProps } from '@formily/vue'

import type { JdFormItem as _JdFormItemProps } from '@jd/jdesign-vue'
import { JdFormItem as JdFormItemComponent } from '@jd/jdesign-vue'

export type JdFormItemProps = typeof _JdFormItemProps & { title: string }

export const JdFormItem = connect(
  JdFormItemComponent,
  mapProps({ title: 'label', required: true }, (props, field) => ({
    error: !isVoidField(field) ? field.selfErrors[0] ?? undefined : undefined,
  }))
)

export default JdFormItem
