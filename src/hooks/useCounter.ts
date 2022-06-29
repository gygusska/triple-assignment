import { useEffect, useState } from 'react'

const easeOutExpo = (x: number) => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

function useCounter(endPoint: number, duration: number, delay: number) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const FRAME_DURATION = 1000 / 60
    const totalFrames = Math.round(duration / FRAME_DURATION)
    let frame = 0

    const onFrame = () => {
      const progress = easeOutExpo(frame / totalFrames)
      const currentCount = Math.round(endPoint * progress)

      setCount(currentCount)

      frame = requestAnimationFrame(onFrame)

      if (endPoint === currentCount) {
        cancelAnimationFrame(frame)
      }
    }

    const timerDelay = setTimeout(onFrame, delay)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timerDelay)
    }
  }, [delay, duration, endPoint])

  return count
}

export default useCounter
