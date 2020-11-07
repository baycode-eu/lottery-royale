<template>
<div class="copyrights">
  vue graphql test copyright baycode.eu
</div>
</template>

<script>
export default {
  name: "copyrights-overlay"
}
</script>

<style scoped>
  .copyrights {
    display: flex;
    position: fixed;
    width: 100%;
    left: 30px;
    bottom: 10px;
    font-size: calc(1vw + 32px);
    pointer-events: none;
    opacity: 0.1;
  }
</style>
