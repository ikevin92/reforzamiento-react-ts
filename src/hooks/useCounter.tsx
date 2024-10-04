import { useState } from 'react'

interface Options {
  initialValue: number
}

export const useCounter = ({ initialValue = 0 }: Options) => {
  const [count, setCount] = useState<number>(initialValue)

  const increaseBy = (value: number): void => {
    if (value < 0 && count === 0) return
    setCount(count + value)
  }

  return {
    count,
    increaseBy
  }
}
