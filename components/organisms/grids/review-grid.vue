<template>
  <div class="review-grid">
    <review
      class="review"
      v-for="(review, key) in reviews"
      :key="key"
      :name="review.name"
      :stars="review.stars"
      :bet="review.bet"
      :review="review.review"
    />
  </div>
</template>
<script>
import Review from "~/components/molecules/review";

export default {
  name: "review-grid",
  components: {Review},

  props: {
    reviews: Array
  }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/theme.scss";

.review-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: $mobile-break-width) {
    grid-template-columns: 1fr 1fr;
  }

  & > .review {
    padding: 8px;
  }
}

</style>
