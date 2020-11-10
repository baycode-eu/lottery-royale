<template>
    <div class="winning-numbers">
      <h3 class="numbers-text subtitle is-6">Winning numbers</h3>
      <numbers
        :numbers="numbers"
        :additionalNumbers="additionalNumbers"
      />
    </div>
</template>
<script>
import Numbers from '~/components/molecules/jackpot/numbers'
export default {
  components: { Numbers },
  props: {
    numbers: Array,
    additionalNumbers: Array,
  }
}
</script>

<style lang="scss" scoped>
  .numbers-text {
    font-weight: 500;
    margin-bottom: 12px;
  }
</style>
