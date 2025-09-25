import { transformComponent } from '../__builtins__'
import { connect, mapProps } from '@formily/vue'
import { JdSwitch } from '@jd/jdesign-vue'

export type SwitchProps = typeof JdSwitch

const TransformJdSwitch = transformComponent<SwitchProps>(JdSwitch, {
  change: 'update:modelValue',
})

export const Switch = connect(
  TransformJdSwitch,
  mapProps({
    value: 'modelValue',
    readOnly: 'readonly',
  })
)

export default Switch
