import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";

import gql from 'graphql-tag'
import {Result} from "~/models/Result";

export interface ResultsApi {
  getResults: () => Result[]
}

export class ResultsApiImpl implements ResultsApi {
  private client: ApolloClient<InMemoryCache>;

  constructor(client: ApolloClient<InMemoryCache>) {
    this.client = client;
  }

  public getResults = (): Result[] => {
    const query = gql`subscription tags($type: String!) {
      tagAdded(type: $type) {
        id
        label
        type
      }
    }`

    // return this.client.query(query)
  }
}
