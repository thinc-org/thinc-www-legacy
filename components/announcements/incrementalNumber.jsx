import BezierEasing from 'bezier-easing'
import { useEffect, useRef } from 'react'

const easing = BezierEasing(0.16, 1, 0.27, 0.89)

function animateValue(ref, start, end, duration) {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    const processExpo = easing(progress)
    ref.current.innerHTML = Math.floor(processExpo * (end - start) + start)
    if (processExpo < 1) {
      window.requestAnimationFrame(step)
    }
  }
  window.requestAnimationFrame(step)
}

const IncrementalNumber = ({ start, end }) => {
  const ref = useRef(null)
  useEffect(() => {
    animateValue(ref, start, end, 3000)
  }, [])
  return <span ref={ref}>{start}</span>
}

export default IncrementalNumber
