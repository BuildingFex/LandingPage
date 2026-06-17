<script setup>
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t } = useI18n()

const videos = [
  {
    id: 'Hoqy5EWpEJo',
    titleKey: 'videos.productTitle',
  },
  {
    id: '1LYzN6tHzos',
    titleKey: 'videos.teamTitle',
  },
]

const { targetRef: videosRevealRoot, isVisible: videosRevealVisible } = useScrollReveal({
  rootMargin: '0px 0px -8% 0px',
  once: true,
})
</script>

<template>
  <section
    id="videos"
    ref="videosRevealRoot"
    class="videos"
    :class="{ 'videos--revealed': videosRevealVisible }"
    aria-labelledby="videos-heading"
  >
    <div class="videos__inner">
      <h2
        id="videos-heading"
        class="videos__heading videos__reveal"
        style="--reveal-i: 0"
      >
        {{ t('videos.heading') }}
      </h2>

      <div class="videos__grid">
        <article
          v-for="(video, i) in videos"
          :key="video.id"
          class="videos__item videos__reveal"
          :style="{ '--reveal-i': i + 1 }"
        >
          <h3 class="videos__title">{{ t(video.titleKey) }}</h3>
          <div class="videos__embed-wrap">
            <iframe
              class="videos__embed"
              :src="`https://www.youtube.com/embed/${video.id}`"
              :title="t(video.titleKey)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.videos {
  padding: clamp(3rem, 6vw, 4.5rem) max(1rem, env(safe-area-inset-left))
    clamp(3.5rem, 7vw, 5rem) max(1rem, env(safe-area-inset-right));
  border-top: 1px solid var(--apple-border-hairline);
  background: var(--apple-bg-secondary);
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.videos__inner {
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
}

.videos__heading {
  margin: 0 0 clamp(2rem, 4vw, 2.75rem);
  font-size: clamp(1.85rem, 4.2vw, 2.65rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.12;
  color: #000000;
  text-align: center;
}

.videos__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(2rem, 4vw, 2.5rem);
}

@media (min-width: 768px) {
  .videos__grid {
    grid-template-columns: 1fr 1fr;
    gap: clamp(1.5rem, 3vw, 2rem);
  }
}

.videos__item {
  min-width: 0;
}

.videos__title {
  margin: 0 0 1rem;
  font-size: 1.0625rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: #000000;
  text-align: center;
}

.videos__embed-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: var(--apple-radius-sm);
  overflow: hidden;
  background: #000000;
  box-shadow: var(--apple-shadow-md);
}

.videos__embed {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.videos__reveal {
  opacity: 0;
  transform: translate3d(0, 24px, 0);
}

.videos--revealed .videos__reveal {
  animation: lp-rise-soft 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--reveal-i, 0) * 0.07s);
}

@media (prefers-reduced-motion: reduce) {
  .videos__reveal {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
