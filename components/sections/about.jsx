import { MdLightbulbOutline, MdStarBorder, MdSearch } from 'react-icons/md'

import Card from '../../components/card'
import Icon from '../../components/icon'

const About = () => (
  <section className="w-full bg-gray-100 py-20">
    <div className="container mb-20">
      <div className="mx-8">
        <div className="w-full flex justify-center flex-row">
          <div className="w-full md:w-2/3">
            <p className="text-4xl text-center font-headline font-semibold leading-none text-black mb-10">About</p>
            <p className="text-base text-center font-normal leading-relaxed">
              <span className="font-bold">Thinc.</span> is a student-run community aiming to make impact to society. A
              student community committed to promoting real-world profession skills with the goal of incubating the
              leader of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex items-stretch flex-col md:flex-row">
      <div className="flex w-full md:w-1/3 mb-3 md:mb-0">
        <Card className="bg-white">
          <div className="flex flex-row md:flex-col lg:flex-row items-baseline mb-5">
            <Icon className="text-purple-800 bg-purple-200 mr-5 mb-0 md:mb-5 lg:mb-0">
              <MdStarBorder />
            </Icon>
            <p className="text-xl font-headline font-medium text-purple-600">Real World Experience</p>
          </div>
          <p className="text-base font-normal text-gray-600 leading-relaxed">
            Working closely with businesses to nurture professionalism in students through internship and projects.
          </p>
        </Card>
      </div>
      <div className="flex w-full md:w-1/3 mb-3 md:mb-0">
        <Card className="bg-white">
          <div className="flex flex-row md:flex-col lg:flex-row items-baseline mb-5">
            <Icon className="text-orange-800 bg-orange-200 mr-5 mb-0 md:mb-5 lg:mb-0">
              <MdLightbulbOutline />
            </Icon>
            <p className="text-xl font-headline font-medium text-orange-600">Inspiration & Opportunity</p>
          </div>
          <p className="text-base font-normal text-gray-600 leading-relaxed">
            Students are given opportunities to pursue the areas that they are{' '}
            <span className="text-black">truly passionate</span> about.
          </p>
        </Card>
      </div>
      <div className="flex w-full md:w-1/3">
        <Card className="bg-white">
          <div className="flex flex-row md:flex-col lg:flex-row items-baseline mb-5">
            <Icon className="text-blue-800 bg-blue-200 mr-5 mb-0 md:mb-5 lg:mb-0">
              <MdSearch />
            </Icon>
            <p className="text-xl font-headline font-medium text-blue-600">Career Exploration</p>
          </div>
          <p className="text-base font-normal text-gray-600 leading-relaxed">
            Students learn about career options and networking from weekly guest speakers invited from all industries.
          </p>
        </Card>
      </div>
    </div>
  </section>
)

export default About
