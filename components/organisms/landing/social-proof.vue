<template>
  <review-grid :reviews="reviews" />
</template>

<script>
import ReviewGrid from "~/components/organisms/grids/review-grid";
export default {
  components: {ReviewGrid},
  props: {
    reviews: {}
  }
}
</script>

<style scoped>

</style>
