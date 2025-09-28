import { connect, mapProps } from '@formily/vue'
import { JdInput } from '@jd/jdesign-vue'
import { Input } from '../input'

export type PasswordProps = typeof JdInput

export const Password = connect(
  Input,
  mapProps((props) => ({
    ...props,
    showPassword: true,
  })),
)

export default Password
