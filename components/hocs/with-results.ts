import Vue, {VueConstructor} from "vue"

const withResults = (component: VueConstructor) => {
  return Vue.component('withResults', {
    render(createElement) {
      return createElement(component, {
        props: {
          results: this.$store.getters['results/results'],
          reloadResults: (type: string, limit: number) =>
            this.$store.dispatch("results/reloadResults", {type, limit})
        }
      })
    },
  })
}

export default withResults
