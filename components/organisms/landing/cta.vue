<template>
<div class="cta">
  <b-button class="button is-primary is-large" @click="() => $emit('clicked')">
    {{btnText}}
  </b-button>
  <h4 class="subtitle is-6 discount">
    {{discount}}
  </h4>
</div>
</template>

<script>
export default {
  props: {
    discount: String,
    btnText: String
  }
}
</script>

<style lang="scss" scoped>
.cta {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  width: 100%;

  & > .discount {
    margin-top: 16px;
  }
}

</style>
