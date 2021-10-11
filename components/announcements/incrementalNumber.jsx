import { useEffect, useRef } from 'react'

function animateValue(ref, start, end, duration) {
  let startTimestamp = null
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp
    const progress = Math.min((timestamp - startTimestamp) / duration, 1)
    ref.current.innerHTML = Math.floor(progress * (end - start) + start)
    if (progress < 1) {
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
