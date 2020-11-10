<template>
<results-page-template>
  <template slot="loader">
    <b-loading is-full-page v-model="loading"/>
  </template>
  <template slot="page-title">
    <h1 class="title is-2">EuroJackpot Results</h1>
  </template>
  <template slot="result-date-selector">
    <result-selector
      @selected="(result) => { this.selectedResult = result }"
      :results="results"
      :selected-result="selectedResult"
    />
  </template>
  <template slot="jackpot">
    <jackpot
      v-if="selectedResult"
      :date="selectedResult.date"
      :jackpot="selectedResult.jackpot"
    />
  </template>
  <template slot="winning-numbers">
    <winning-numbers
      v-if="selectedResult"
      :numbers="selectedResult.numbers"
      :additionalNumbers="selectedResult.additionalNumbers"
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

import { GameTypes } from '~/enums/game-types'
import ResultSelector from '~/components/organisms/results/result-selector'
import Jackpot from '~/components/organisms/results/jackpot'
import ResultsPageTemplate from "~/components/templates/results-page-template"
import WinningNumbers from '~/components/organisms/results/winning-numbers'
import Odds from '~/components/organisms/results/odds'

export default {
  components: {
    Odds,
    Jackpot,
    WinningNumbers,
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

  computed: {
    loading() {
      return !this.results;
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
