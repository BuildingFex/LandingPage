<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { YOUTUBE_PRODUCT_ID, YOUTUBE_TEAM_ID } from '@/marketing/infrastructure/envConfig.js'
import { useScrollReveal } from '../composables/useScrollReveal.js'

const { t } = useI18n()

const productId = computed(() => YOUTUBE_PRODUCT_ID.trim())
const teamId = computed(() => YOUTUBE_TEAM_ID.trim())
const hasAnyVideo = computed(() => Boolean(productId.value || teamId.value))

const productEmbedSrc = computed(() =>
  productId.value ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(productId.value)}?rel=0` : '',
)
const teamEmbedSrc = computed(() =>
  teamId.value ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(teamId.value)}?rel=0` : '',
)

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
      <h2 id="videos-heading" class="videos__title videos__reveal" style="--reveal-i: 0">
        {{ t('videos.heading') }}
      </h2>
      <p class="videos__lead videos__reveal" style="--reveal-i: 1">{{ t('videos.lead') }}</p>

      <template v-if="hasAnyVideo">
        <div
          class="videos__grid"
          :class="{
            'videos__grid--single': Boolean(productId) !== Boolean(teamId),
          }"
        >
          <div v-if="productId" class="videos__cell videos__reveal" style="--reveal-i: 2">
            <h3 class="videos__subtitle">{{ t('videos.productTitle') }}</h3>
            <div class="videos__frame">
              <iframe
                class="videos__iframe"
                :src="productEmbedSrc"
                :title="t('videos.embedAriaProduct')"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              />
            </div>
          </div>
          <div v-if="teamId" class="videos__cell videos__reveal" style="--reveal-i: 3">
            <h3 class="videos__subtitle">{{ t('videos.teamTitle') }}</h3>
            <div class="videos__frame">
              <iframe
                class="videos__iframe"
                :src="teamEmbedSrc"
                :title="t('videos.embedAriaTeam')"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </template>
      <p v-else class="videos__hint videos__reveal" style="--reveal-i: 2">{{ t('videos.hint') }}</p>
    </div>
  </section>
</template>

<style scoped>
.videos {
  padding: clamp(3rem, 6vw, 4.5rem) max(1rem, env(safe-area-inset-left))
    clamp(3.5rem, 7vw, 5rem) max(1rem, env(safe-area-inset-right));
  border-top: 1px solid var(--apple-border-hairline);
  background: #fafafa;
  font-family: var(--apple-font, -apple-system, system-ui, sans-serif);
  -webkit-font-smoothing: antialiased;
}

.videos__inner {
  max-width: 1120px;
  margin: 0 auto;
  width: 100%;
  min-width: 0;
}

.videos__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.85rem, 4.2vw, 2.65rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.12;
  color: #000000;
}

.videos__lead {
  margin: 0 0 clamp(1.75rem, 4vw, 2.25rem);
  max-width: 40rem;
  font-size: 1rem;
  line-height: 1.55;
  letter-spacing: -0.015em;
  color: #666666;
}

.videos__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1.75rem, 4vw, 2.25rem);
  align-items: start;
}

@media (min-width: 900px) {
  .videos__grid:not(.videos__grid--single) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .videos__grid--single {
    max-width: 52rem;
    margin-inline: auto;
  }
}

.videos__subtitle {
  margin: 0 0 0.65rem;
  font-size: 1.0625rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #000000;
}

.videos__frame {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 12px;
  background: #000000;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}

.videos__iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.videos__hint {
  margin: 0;
  padding: 1rem 1.15rem;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  font-size: 0.9375rem;
  line-height: 1.5;
  color: #666666;
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
