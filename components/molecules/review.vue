<template>
  <div class="review">
    <div class="name">
      {{ name }}
    </div>
    <div class="bet">
      Bet: {{ bet }}
    </div>
    <div class="stars">
      <star
        v-for="(x, key) in 5"
        :key="key"
        :active="key < stars"
      />
    </div>
    <div class="review">
      Review: {{ review }}
    </div>
  </div>
</template>
<script>
import Star from "~/components/atoms/star";

export default {
  name: "Review",
  components: {Star},
  props: {
    stars: Number,
    bet: Number,
    name: String,
    review: String
  }
}
</script>


<style scoped>
.name {
  font-weight: 300
}
.bet {
  font-weight: 700
}
.review {
  line-height: 24px;
  font-weight: 400
}
.stars {
  display: flex;
}
</style>
