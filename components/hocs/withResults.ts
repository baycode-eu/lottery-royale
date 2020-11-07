import Vue, {VueConstructor} from "vue"

const withResults = (component: VueConstructor) => {
  return Vue.component('withResults', {
    render(createElement, ctx) {
      return createElement(component, {
        props: {
          results: this.$store.getters['results/results'],
          reloadResults: () => this.$store.dispatch("results/reloadResults")
        }
      })
    },
  })
}

export default withResults
