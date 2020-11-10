<template>
  <div class="jackpot-numbers">
    <div class="jackpot-text">
      <div class="text">
        {{jackpot}}
      </div>
      <div class="date">
        {{date}}
      </div>
    </div>
    <div class="numbers">
      <number-grid class="normal" :numbers="numbers" />
      <div class="delimeter"/>
      <number-grid class="additional" :numbers="additionalNumbers" additional />
    </div>
  </div>
</template>
<script>
import Number from '~/components/atoms/numbers/number'
import NumberGrid from '~/components/organisms/grids/number-grid'
export default {
  name: "jackpot-numbers",
  components: { NumberGrid, Number },
  props: {
    date: String,
    numbers: Array,
    additionalNumbers: Array,
    jackpot: String
  }
}
</script>

<style lang="scss" scoped>
.jackpot-numbers {
  & > .jackpot-text {
    & > .text {

    }

    & > .date {

    }
  }
  & > .numbers {
    display: flex;
  }
}
</style>
