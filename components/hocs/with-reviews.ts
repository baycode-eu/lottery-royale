import Vue, {VueConstructor} from "vue"
import getSocialProof from "~/mock/getSocialProof";

const withReviews = (component: VueConstructor) => {
  return Vue.component('withReviews', {
    render(createElement, ctx) {
      return createElement(component, {
        props: {
          reviews: getSocialProof()
        }
      })
    },
  })
}

export default withReviews
