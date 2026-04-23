import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(options = {}) {
  const { rootMargin = '0px 0px -10% 0px', threshold = 0, once = true } = options

  const targetRef = ref(null)
  const isVisible = ref(false)

  let observer

  onMounted(() => {
    const el = targetRef.value
    if (!el) return

    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          isVisible.value = true
          if (once) observer?.disconnect()
        }
      },
      { root: null, rootMargin, threshold },
    )
    observer.observe(el)
  })

  onUnmounted(() => observer?.disconnect())

  return { targetRef, isVisible }
}
