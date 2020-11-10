import { Result } from '~/models/Result'

export interface ResultsResponse {
  data: {
    draws: [
      Result[]
    ]
  }
}
