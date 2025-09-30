export const scrollToField = () => {
  const element = document.querySelector(
    '.formily-jd-design-form-item-feedback-has-text',
  )
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
}
