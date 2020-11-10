import { Odd } from '~/models/Odd'

export interface Result {
  date: String,
  additionalNumbers: String[],
  jackpot: String,
  numbers: String[],
  odds: Odd[]
}
