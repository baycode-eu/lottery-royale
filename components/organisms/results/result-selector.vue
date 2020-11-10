<template>
  <b-select
    :value="selectedResult"
    @input="changeSelectedResult"
    placeholder="Select a name"
  >
    <option
      v-for="option in results"
      :value="option"
      :key="option.date"
    >
      {{ option.date }}
    </option>
  </b-select>
</template>

<script>
export default {
name: "ResultSelector",
  methods: {
    changeSelectedResult(result) {
      this.$emit("selected", result)
    }
  },
  props: {
    results: {},
    selectedResult: {}
  }
}
</script>

<style scoped>

</style>
