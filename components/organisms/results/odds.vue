<template>
  <b-table :data="odds" :columns="columns" />
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          field: 'winningClass',
          label: 'Winning Class',
          width: '128',
        },
        {
          field: 'odd',
          label: 'Odd',
        },
        {
          field: 'numberOfWinners',
          label: 'Number of winners',
        },
      ]
    }
  },
  props: {
    odds: Array
  }
}
</script>
