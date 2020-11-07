<template>
  <blockquote class="is-citation">
    <h3 class="is-italic subtitle is-5 has-text-centered text">{{cite}}<cite>— {{ author }}</cite></h3>
  </blockquote>
</template>

<script>
export default {
  props: {
    cite: String,
    author: String
  }
}

</script>

<style scoped>

</style>
