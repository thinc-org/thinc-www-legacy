import { differenceInYears } from 'date-fns'

const CUGeneration = () => {
  // Assume: increase generation every 31st July of every year
  // Note: Javascript count January as 0
  const currentCUGeneration = differenceInYears(new Date(), new Date(1916, 6, 31))
  return (
    <p className="text-4xl text-center font-headline font-semibold leading-none text-black mb-10">
      Hello, CU{currentCUGeneration}
    </p>
  )
}

export default CUGeneration
