import { differenceInYears } from 'date-fns'

import IncrementalNumber from './incrementalNumber'

const CUGeneration = () => {
  // Assume: increase generation every 31st July of every year
  // Note: Javascript count January as 0
  const currentCUGeneration = differenceInYears(new Date(), new Date(1916, 6, 31))
  return <IncrementalNumber start={1} end={currentCUGeneration} />
}

export default CUGeneration
