import { Result } from '~/models/Result'

export interface ResultsResponse {

    draw: { draws: Result[] }
}
