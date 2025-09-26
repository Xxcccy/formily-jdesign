import { createSchemaField } from '@formily/vue'
import IntlForm from '../components/intlForm'

export function useSchemaFiled(
  components: Record<string, any>,
  scope: Record<string, any>,
) {
  const { SchemaField } = createSchemaField({
    components: {
      IntlForm,
      ...components,
    },
    scope,
  })

  return SchemaField
}
