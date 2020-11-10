<template>
  <div :class="`number-atom ${additional && 'additional'}`">
    {{number}}
  </div>
</template>

<script>
export default {
  name: "number",

  props: {
    number: Number,
    additional: Boolean
  }
}
</script>

<style lang="scss" scoped>
  @import "../../../assets/styles/components/atoms/number";

  .number-atom {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
