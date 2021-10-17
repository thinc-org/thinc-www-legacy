import { MdOpenInNew } from 'react-icons/md'

import Card from '@/components/card'

const Projects = () => (
  <>
    <style jsx>{`
      .product-preview {
        width: 80px;
        height: 80px;
        background-position: center center;
        background-size: cover;
      }
    `}</style>
    <section className="bg-white py-20">
      <div className="container mb-20">
        <div className="mx-8">
          <div className="w-full flex justify-center flex-row">
            <div className="w-full md:w-2/3">
              <p className="text-4xl text-center font-headline font-semibold leading-none text-black">Projects</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-stretch flex-col md:flex-row mb-20">
        <div className="flex w-full lg:w-1/3 mb-3 md:mb-0">
          <Card className="flex flex-col justify-between bg-gray-100">
            <div className="mb-5">
              <img
                className="mb-5 rounded-full bg-gray-200 flex items-center justify-center border product-preview"
                src="/static/cgr-logo.png"
              ></img>
              <p className="text-xl font-headline font-medium text-black mb-5">CU Get Reg</p>
              <p className="text-base font-normal text-gray-600 leading-relaxed">
                Have no idea what courses to take? Don't know what this course is about? We got it covered. With CU Get
                Reg, we put all kinds of course data together so that you don't have to.
              </p>
            </div>
            <a href="https://cugetreg.com" target="_blank" rel="noopener noreferrer">
              <button className="bg-black px-4 py-2 rounded text-white text-xs tracking-widest uppercase">
                BROWSE <span className="font-bold">NOW</span>
                <MdOpenInNew className="inline text-sm ml-1" />
              </button>
            </a>
          </Card>
        </div>
        <div className="flex w-full lg:w-1/3">
          <Card className="flex flex-col justify-between bg-gray-100">
            <div className="mb-5">
              <img
                className="mb-5 rounded-full bg-white flex items-center justify-center border product-preview"
                src="/static/cusc-logo.png"
              ></img>
              <p className="text-xl font-headline font-medium text-black mb-5">Sports Complex Booking</p>
              <p className="text-base font-normal text-gray-600 leading-relaxed">
                Tired of running to the sports complex early every day? Now, you can book your reservations anytime and
                anywhere.
              </p>
            </div>
            <div>
              <button
                disabled
                className="bg-transparent px-4 py-2 rounded text-gray-600 border text-xs tracking-widest uppercase cursor-auto"
              >
                COMING EARLY 2022
              </button>
            </div>
          </Card>
        </div>
        <div className="flex w-full lg:w-1/3 mb-3 md:mb-0">
          <Card className="flex flex-col justify-between bg-gray-100">
            <div className="mb-5">
              <div
                className="mb-5 rounded-full bg-gray-200 flex items-center justify-center border product-preview"
                style={{
                  backgroundImage:
                    'url("https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/42/58/6b/42586b05-243c-94a1-6126-0b2a61b6076d/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-9.png/460x0w.jpg")',
                }}
              />
              <p className="text-xl font-headline font-medium text-black mb-5">Chula Pop Bus</p>
              <p className="text-base font-normal text-gray-600 leading-relaxed">
                Never get lost in Chula again! Chula Pop Bus App helps make navigation through Chulalongkorn University
                much easier.
              </p>
            </div>
          </Card>
        </div>
      </div>
      <div className="container">
        <div className="mx-8">
          <p className="text-base text-center text-blue-600 leading-none">{'All Projects ->'}</p>
        </div>
      </div>
    </section>
  </>
)

export default Projects
