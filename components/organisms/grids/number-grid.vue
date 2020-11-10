<template>
  <div class="number-grid">
    <number
      class="number"
      v-for="(number, key) in numbers"
      :number="number"
      :additional="additional"
      :key="key"
    />
  </div>
</template>

<script>
import Number from '~/components/atoms/numbers/number'

export default {
  name: "number-grid",
  components: { Number },
  props: {
    additional: Boolean,
    numbers: Array,
  }
}
</script>

<style lang="scss" scoped>
  .number-grid {
    display: flex;

    & > .number {
      margin-right: 8px;
    }
  }
</style>
