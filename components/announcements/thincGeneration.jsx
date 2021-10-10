import { differenceInYears } from 'date-fns'
import ordinal from 'ordinal'

const ThincGeneration = () => {
  // Assume: increase generation every 31st July of every year
  // Note: Javascript count January as 0
  const currentCUGeneration = differenceInYears(new Date(), new Date(1916, 6, 31))
  const currentThincGeneration = currentCUGeneration - 96
  return <span>{ordinal(currentThincGeneration)}</span>
}

export default ThincGeneration
