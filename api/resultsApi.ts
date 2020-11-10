import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";

import gql from 'graphql-tag'
import { Result } from "~/models/Result";
import { ResultsResponse } from "~/api/responses/ResultsResponse.ts";

export interface ResultsApi {
  getResults: (type?: string, limit?: number) => Promise<Result[]>
}

export class ResultsApiImpl implements ResultsApi {
  private _client: ApolloClient<InMemoryCache>;

  constructor(client: ApolloClient<InMemoryCache>) {
    this._client = client;
  }

  public getResults = async (type?: string, limit?: number): Promise<Result[]> => {
    const query = gql`
      query draws($type: String!, $limit: Int = 10) {
        draw(type: $type, limit: $limit) {
          draws {
            date
            additionalNumbers
            jackpot
            numbers
            odds {
              numberOfWinners
              odd
              winningClass
            }
          }
        }
      }`

    const {data} = await this._client.query<ResultsResponse>({
      query,
      variables: {
        type,
        limit
      }
    })

    return data.draw.draws
  }
}
