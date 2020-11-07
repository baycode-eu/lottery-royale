<template>
  <section class="header">
    <div class="header-contents">
      <nuxt-link to="/" class="logo">
        <dice class="dice" />
        <span class="logo-text">Lottery Royale</span>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import Dice from "~/components/atoms/dice/dice-1";

export default {
  components: {Dice},
  name: "header"
}

</script>
<style lang="scss" scoped>
@import "~/assets/styles/components/organisms/header.scss";
</style>
