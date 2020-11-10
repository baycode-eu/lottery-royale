<template>
  <div class="numbers">
    <number-grid class="normal" :numbers="numbers" />
    <number-grid class="additional" :numbers="additionalNumbers" additional />
  </div>
</template>

<script>
import NumberGrid from '~/components/organisms/grids/number-grid'
import Number from '~/components/atoms/numbers/number'

export default {
  name: "numbers",
  components: { NumberGrid, Number },
  props: {
    numbers: {},
    additionalNumbers: {}
  }
}
</script>

<style lang="scss" scoped>

  .numbers {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    & > :nth-child(1){
      padding-right: 16px;
      padding-bottom: 16px;
    }
  }
</style>
