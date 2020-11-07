<template>
  <div :class="`rating  ${active && 'active'}`" >
    <span class=star>☆</span>
  </div>
</template>

<script>
export default {
  name: "star",
  props: {
    active: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/theme.scss";
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
}
.rating > span {
  display: inline-block;
  position: relative;
  width: 1.1em;
}
.rating.active > span:before,
.rating.active > span ~ span:before {
  content: "\2605";
  color: $primary;
  position: absolute;
}
</style>
