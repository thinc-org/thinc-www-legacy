import dynamic from 'next/dynamic'

const CUGeneration = dynamic(() => import('./cuGeneration'), {
  ssr: false,
})

const ThincGeneration = dynamic(() => import('./thincGeneration'), {
  ssr: false,
})

const Recruiting = () => {
  return (
    <section className="w-full bg-pink-100 py-20">
      <div className="container">
        <div className="mx-8">
          <div className="w-full flex justify-center flex-row">
            <div className="w-full flex flex-col items-center md:w-2/3">
              <p className="text-4xl text-center font-headline font-semibold leading-none text-black mb-10">
                Hello, CU
                <CUGeneration />
              </p>
              <p className="text-base text-center font-normal leading-loose mb-10">
                Welcome to <span className="font-bold">Thinc.</span>! Please join our Facebook Group for updates on
                events and activities.
              </p>
              <div className="flex gap-x-5 mb-5 flex-col md:flex-row">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fb.com/groups/794863941175364"
                  className="border-2 border-pink-600 bg-pink-600 mb-3 md:mb-0 px-4 py-2 rounded text-white text-xs tracking-widest text-center hover:bg-pink-700 transition duration-200"
                >
                  JOIN <span className="ml-1 font-bold">FACEBOOK GROUP</span>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/ThailandIncubator"
                  className="border-2 border-pink-600 bg-white px-4 py-2 rounded text-pink-600 text-xs tracking-widest text-center hover:bg-pink-100 transition duration-200 ease-in"
                >
                  VISIT <span className="ml-1 font-bold"> FACEBOOK PAGE</span>
                </a>
              </div>
              <p className="text-sm text-gray-600 text-center font-normal leading-loose">
                or search for "
                <span className="font-bold">
                  Thinc. <ThincGeneration />
                  Gen
                </span>
                " in your FB application!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recruiting
