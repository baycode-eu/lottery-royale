import {ApolloClient} from "apollo-client";
import gql from 'graphql-tag'
import {Result} from "~/models/Result";

export interface ResultsApi {
  getResults: () => Result[]
}

class ResultsApiImpl implements ResultsApi {
  private client: ApolloClient;

  constructor(client: ApolloClient<any>) {
    this.client = client;
  }

  public getResults = (): Result[] => {
    gql`subscription tags($type: String!) {
      tagAdded(type: $type) {
        id
        label
        type
      }
    }`

    return this.client.query({

    })
  }
}

export const createResultsApi = (client: ApolloClient): ResultsApi => {
  return new ResultsApiImpl(client)
}
