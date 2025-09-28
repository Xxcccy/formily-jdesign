import { createSchemaField } from '@formily/vue'

export function useSchemaFiled() {
  const { SchemaField } = createSchemaField()

  return SchemaField
}
