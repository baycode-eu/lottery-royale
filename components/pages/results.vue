<template>
<results-page-template>
  <template slot="result-date-selector">
    <result-selector
      @selected="(result) => { this.selectedResult = result }"
      :results="results"
      :selected-result="selectedResult"
    />
  </template>
  <template slot="jackpot-numbers">
    <jackpot-numbers
      v-if="selectedResult"
      :date="selectedResult.date"
      :numbers="selectedResult.numbers"
      :additionalNumbers="selectedResult.additionalNumbers"
      :jackpot="selectedResult.jackpot"
    />
  </template>
  <template slot="odds">
    <odds
      v-if="selectedResult"
      :odds="selectedResult.odds"
    />
  </template>
</results-page-template>
</template>
<script>
import ResultSelector from '~/components/organisms/results/result-selector'
import JackpotNumbers from '~/components/organisms/results/jackpot-numbers'

import ResultsPageTemplate from "~/components/templates/results-page-template"
import { GameTypes } from '~/enums/game-types'
export default {
  name: "results",
  components: {
    JackpotNumbers,
    ResultSelector,
    ResultsPageTemplate,
  },
  data() {
    return {
      selectedResult: null
    }
  },

  methods: {
    async getResults() {
      await this.reloadResults(GameTypes.EUROJACKPOT, 10)
      this.selectedResult = this.results[0] || null
    }
  },

  mounted(){
    this.getResults()
  },

  props: {
    reloadResults: {},
    results: {}
  }
}
</script>

<style scoped>

</style>
