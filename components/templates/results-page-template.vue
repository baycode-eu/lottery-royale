<template>
  <div class="results-page-template">
    <slot name="loader" />
    <section class="page-title">
      <slot name="page-title" />
    </section>
    <section class="result-date-selector">
      <slot name="result-date-selector" />
    </section>
    <section class="jackpot">
      <slot name="jackpot" />
    </section>
    <section class="winning-numbers">
      <slot name="winning-numbers" />
    </section>
    <section class="odds">
      <slot name="odds" />
    </section>
  </div>
</template>

<script>
export default {
name: "results-page-template"
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/templates/results-page-template";
</style>
