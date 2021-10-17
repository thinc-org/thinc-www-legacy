import BezierEasing from 'bezier-easing'
import { RefObject, useEffect, useRef } from 'react'

const easing = BezierEasing(0.16, 1, 0.27, 0.89)

function animateValue(ref: RefObject<HTMLSpanElement>, start: number, end: number, duration: number) {
  let startTimestamp: number | null = null
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const processExpo = easing(progress)
    if (ref.current) {
      ref.current.innerHTML = `${Math.floor(processExpo * (end - start) + start)}`
    }
    if (processExpo < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

interface IncrementalNumberProps {
  start: number
  end: number
}

const IncrementalNumber = ({ start, end }: IncrementalNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    animateValue(ref, start, end, 3000)
  }, [])
  return <span ref={ref}>{start}</span>
}

export default IncrementalNumber
