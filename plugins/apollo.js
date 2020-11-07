import {ResultsApiImpl} from "~/api/resultsApi";
import {HttpLink} from "apollo-link-http";
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";

export const createResultsApi = (client) => {
  return new ResultsApiImpl(client)
}

export const createGraphQlClient = (link) => {
  return new ApolloClient({
    link,
    cache: new InMemoryCache({
      addTypename: true
    })
  })
}

export default async ({
  app,
  store,
  redirect,
  route,
}, inject) => {
  const link = new HttpLink({ uri: "https://www.lottohelden.de/graphql"});

  const client = createGraphQlClient(link)
  inject('graphql', createResultsApi(client));
}



