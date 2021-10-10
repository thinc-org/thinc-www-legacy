import { differenceInYears } from 'date-fns'

const CUGeneration = () => {
  // Assume: increase generation every 31st July of every year
  // Note: Javascript count January as 0
  const currentCUGeneration = differenceInYears(new Date(), new Date(1916, 6, 31))
  return <span>{currentCUGeneration}</span>
}

export default CUGeneration
