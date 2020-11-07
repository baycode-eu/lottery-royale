<template>
  <div class="app">
    <app-header />
    <copyrights-overlay/>
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

export default {
  components: {
    AppHeader,
    AppFooter,
  },

  mounted() {
    console.log(this.$route)
  },
}
</script>

<style lang="scss">
  @import "../assets/styles/layouts/default";
</style>
