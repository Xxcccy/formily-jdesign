import { IFieldResetOptions } from '@formily/core'
import { h, useParentForm } from '@formily/vue'
import { observer } from '@formily/reactive-vue'
import { defineComponent } from 'vue'

import type { JdButton as JdButtonProps } from '@jd/jdesign-vue'
import { JdButton } from '@jd/jdesign-vue'

export type ResetProps = IFieldResetOptions & typeof JdButtonProps

export const Reset = observer(
  defineComponent({
    name: 'FReset',
    props: {
      forceClear: {
        type: Boolean,
        default: false,
      },
      validate: {
        type: Boolean,
        default: false,
      },
    },
    setup(props, { attrs, slots }: any) {
      const formRef = useParentForm()
      return () => {
        const form = formRef?.value
        return h(
          JdButton,
          {
            ...attrs,
            onClick: (e: MouseEvent) => {
              if (attrs?.onClick) {
                if (attrs.onClick(e) === false) return
              }
              form
                ?.reset('*', {
                  forceClear: props.forceClear,
                  validate: props.validate,
                })
                .then(attrs.onResetValidateSuccess as (e: any) => void)
                .catch(attrs.onResetValidateFailed as (e: any) => void)
            },
          },
          slots,
        )
      }
    },
  }),
)

export default Reset
