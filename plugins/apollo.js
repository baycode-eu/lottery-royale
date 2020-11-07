import VueApollo from "vue-apollo";
import Vue from 'vue'
import {createGraphQlClient} from "~/api/graphQlClient";
import {createResultsApi} from "~/api/resultsApi";
import {HttpLink} from "apollo-link-http";

Vue.use(VueApollo)

export default async ({
  app,
  store,
  redirect,
  route,
}, inject) => {
  const link = new HttpLink({ uri: "https://www.lottohelden.de/graphql"});

  const client = createGraphQlClient(link)

  const graphql = new VueApollo({
    client: {
      results: 'results'
    },
    defaultClient: client,
    defaultOptions: {},
    errorHandler (error) {
      console.log('Global error handler')
      console.error(error)
    },
  })

  inject('graphql', createResultsApi(graphql.defaultClient))
}



