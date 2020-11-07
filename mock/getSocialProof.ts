import Review from "../models/Review"

export default (): Review[] => {
  return [
    {
      name: "Jack",
      stars: 4,
      bet: 200,
      review: "I lost some money, but then I won twice as much. I thought this is yet another lottery, but this one was special."
    },
    {
      name: "Michael",
      stars: 5,
      bet: 404,
      review: "I won. I just won, I still could not believe how much my life had changed as a result of a few random numbers."
    },
    {
      name: "Ralph",
      stars: 5,
      bet: 500,
      review: "I've bet everything I had. All in! Now instead of one Lambo I have 3. I rate 5/5 !!!"
    }
  ]
}
