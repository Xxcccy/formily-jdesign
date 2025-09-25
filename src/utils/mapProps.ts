// 为组件实现对 FormItem 的双向绑定功能
export const mapVModel = (props: Record<string, any>) => {
  return {
    ...props,
    modelValue: props.value,
    'onUpdate:modelValue': (val: any) => {
      props.onChange(val)
    },
  }
}
