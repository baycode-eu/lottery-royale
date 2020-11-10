<template>
  <div class="jackpot-numbers">
    <div class="jackpot-text">
      <h3 class="date title is-4 has-text-weight-light">
        {{date}}
      </h3>
      <h1 class="text subtitle is-4">
        <span>Jackpot draw</span>
        <span class="has-text-weight-bold">{{jackpot | money("eur")}}</span>
      </h1>
    </div>
  </div>
</template>
<script>
import Numbers from '~/components/molecules/jackpot/numbers'
export default {
  components: { Numbers },
  props: {
    date: String,
    jackpot: String
  }
}
</script>
