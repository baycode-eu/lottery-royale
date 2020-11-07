<template>
<section class="lottery-win-grand">
  <h2 class="visible-for-eyes subtitle is-3 has-text-centered text before-cta-text">
    {{beforeCtaText}}
  </h2>
  <h2 class="scenery subtitle is-4 has-text-centered text cta-text">
    {{ctaText}}
  </h2>
</section>
</template>

<script>
export default {
  props: {
    text: String,
    beforeCtaText: String,
    ctaText: String
  }
}
</script>

<style lang="scss" scoped>
.is-citation {
   margin-bottom: 48px;
}
.visible-for-eyes {
  margin-bottom: 48px;
}
</style>
