<template>
  <div class="app">
    <app-header />
    <copyrights-overlay />
    <div class="main-container">
      <div class="page">
        <nuxt />
      </div>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/organisms/layout/header'
import AppFooter from '~/components/organisms/layout/footer'
import CopyrightsOverlay from '~/components/organisms/layout/copyrights-overlay'

export default {
  components: {
    AppHeader,
    AppFooter,
    CopyrightsOverlay
  },

  mounted() {
    // analytics
  },
}
</script>

<style lang="scss">
  @import "../assets/styles/layouts/default";
</style>
