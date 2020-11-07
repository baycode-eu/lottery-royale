<template>
  <div class="landing-page-template">
    <div class="first-contact-section">
      <section class="welcome">
        <slot name="welcome" />
      </section>
      <section class="lottery-brief">
        <slot name="lottery-brief" />
      </section>
    </div>
    <section class="social-proof">
      <slot name="social-proof" />
    </section>
    <section class="lottery-win-grand">
      <slot name="lottery-win-grand" />
    </section>
    <section class="call-to-action">
      <slot name="call-to-action" />
    </section>
    <section class="citation">
      <slot name="citation" />
    </section>
  </div>
</template>
<script>
export default {
  name: "landing-page-template"
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/components/templates/landing-page-template.scss";
</style>
