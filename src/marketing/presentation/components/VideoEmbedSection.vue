<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { YOUTUBE_PRODUCT_ID, YOUTUBE_TEAM_ID } from '@/marketing/infrastructure/envConfig.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const props = defineProps({
  videoKey: {
    type: String,
    required: true,
    validator: (v) => v === 'product' || v === 'team',
  },
  /** Apple-style band: default white, muted = light gray */
  variant: {
    type: String,
    default: 'default',
    validator: (v) => v === 'default' || v === 'muted',
  },
})

const { t } = useI18n()

const videoId = computed(() =>
  props.videoKey === 'product' ? YOUTUBE_PRODUCT_ID : YOUTUBE_TEAM_ID,
)

const embedSrc = computed(() =>
  videoId.value ? `https://www.youtube-nocookie.com/embed/${videoId.value}` : '',
)

const titleId = computed(() => `video-title-${props.videoKey}`)

const sectionClass = computed(() => {
  const c = ['video-section']
  if (props.variant === 'muted') c.push('video-section--muted')
  return c
})

const { targetRef: videoRevealRoot, isVisible: videoRevealVisible } = useScrollReveal({
  rootMargin: '0px 0px -8% 0px',
  once: true,
})
</script>

<template>
  <section
    ref="videoRevealRoot"
    :id="videoKey === 'product' ? 'video-product' : 'video-team'"
    :class="[...sectionClass, { 'video-section--revealed': videoRevealVisible }]"
    :aria-labelledby="titleId"
  >
    <div class="video-section__inner">
      <h2 :id="titleId" class="video-section__title">
        {{ t(`videos.${videoKey}.title`) }}
      </h2>
      <div
        class="video-section__frame"
        role="region"
        :aria-label="t(`videos.${videoKey}.embedAria`)"
      >
        <iframe
          v-if="embedSrc"
          :src="embedSrc"
          class="video-section__iframe"
          :title="t(`videos.${videoKey}.iframeTitle`)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
        <div v-else class="video-section__placeholder">
          <span class="video-section__placeholder-icon" aria-hidden="true">▶</span>
          <p class="video-section__placeholder-text">{{ t(`videos.${videoKey}.placeholder`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.video-section {
  padding: 3rem max(1rem, env(safe-area-inset-left)) 3.5rem max(1rem, env(safe-area-inset-right));
  border-top: 1px solid var(--apple-border-hairline);
  background: var(--apple-bg);
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.video-section--muted {
  background: var(--apple-bg-tertiary);
}

.video-section__inner {
  max-width: 980px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
}

.video-section__title {
  margin: 0 auto 1.25rem;
  max-width: 40rem;
  text-align: center;
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  font-weight: 600;
  letter-spacing: -0.03em;
  line-height: 1.07;
  color: var(--apple-text);
  opacity: 0;
  transform: translate3d(0, 28px, 0);
}

.video-section--revealed .video-section__title {
  animation: lp-rise-title 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.video-section__frame {
  position: relative;
  border-radius: var(--apple-radius-md);
  overflow: hidden;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid var(--apple-border);
  box-shadow: var(--apple-shadow-sm);
  aspect-ratio: 16 / 9;
  opacity: 0;
  transform: translate3d(0, 40px, 0) scale(0.99);
}

.video-section--revealed .video-section__frame {
  animation: lp-rise-card 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: 0.1s;
}

.video-section__iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.video-section__placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  border: 1px dashed var(--apple-border-hairline);
  background: var(--apple-bg);
}

.video-section__placeholder-icon {
  font-size: 2rem;
  opacity: 0.3;
  color: var(--apple-text);
}

.video-section__placeholder-text {
  margin: 0;
  font-size: 12px;
  line-height: 1.33337;
  letter-spacing: -0.01em;
  color: var(--apple-text-secondary);
  max-width: 28ch;
}

@media (prefers-reduced-motion: reduce) {
  .video-section__title,
  .video-section__frame {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
