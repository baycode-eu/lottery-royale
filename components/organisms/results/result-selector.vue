<template>
  <div class="result-selector">
    <b-button
      class="button is-primary"
      :disabled="isFirstSelected"
      @click="selectPrevious"
    ><
    </b-button>
    <b-select
      :value="selectedResult"
      @input="changeSelectedResult"
      placeholder="Loading dates"
    >
      <option
        v-for="option in results"
        :value="option"
        :key="option.date"
      >
        {{ option.date }}
      </option>
    </b-select>
    <b-button
      class="button is-primary"
      :disabled="isLastSelected"
      @click="selectNext"
    >>
    </b-button>
  </div>
</template>

<script>
export default {
name: "ResultSelector",
  methods: {
    changeSelectedResult(result) {
      this.$emit("selected", result)
    },
    selectNext() {
      this.changeSelectedResult(this.results[this.currentSelectedIdx() + 1])
    },
    selectPrevious() {
      this.changeSelectedResult(this.results[this.currentSelectedIdx() - 1])
    },
    currentSelectedIdx() {
      return this.results.findIndex((item) => this.selectedResult === item)
    }
  },
  computed: {
    isLastSelected() {
      return this.results && this.selectedResult === this.results[this.results.length - 1]
    },
    isFirstSelected() {
      return this.results && this.selectedResult === this.results[0]
    }
  },
  props: {
    results: {},
    selectedResult: {}
  }
}
</script>

<style lang="scss" scoped>
  .result-selector {
    display: flex;
  }
</style>
