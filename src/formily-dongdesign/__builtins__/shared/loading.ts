import { JdLoading } from '@jd/jdesign-vue'

export const loading = async (loadingText = 'Loading...', processor: () => Promise<any>) => {
  let loadingInstance = null
  let loading = setTimeout(() => {
    loadingInstance = JdLoading.service({
      text: loadingText,
      background: 'transparent',
    })
  }, 100)
  try {
    return await processor()
  } finally {
    loadingInstance?.close()
    clearTimeout(loading)
  }
}
