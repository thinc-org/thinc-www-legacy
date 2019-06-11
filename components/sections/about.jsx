import Card from '../../components/card'

const About = () => (
    <section className="w-full bg-gray-100 py-20">
        <div className="container mb-20">
            <div className="mx-8">
                <div className="w-full flex flex-col">
                    <div className="w-full md:w-2/3">
                        <p className="text-4xl font-bold leading-none text-black mb-10">About</p>
                        <p className="text-base font-normal leading-relaxed">
                            <span className="font-bold">Thinc.</span> is a student-run community
                            aiming to make impact to society. A student community committed to
                            promoting real-world profession skills with the goal of incubating the
                            leader of tomorrow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex items-stretch flex-col md:flex-row">
            <div className="flex w-full md:w-1/3 mb-3 md:mb-0">
                <Card className="bg-white">
                    <p className="text-xl font-bold text-black mb-5">Real World Experience</p>
                    <p className="text-base font-normal text-gray-600 leading-relaxed">
                        Working closely with businesses to nurture professionalism in students
                        through internship and projects.
                    </p>
                </Card>
            </div>
            <div className="flex w-full md:w-1/3 mb-3 md:mb-0">
                <Card className="bg-white">
                    <p className="text-xl font-bold text-black mb-5">Inspiration & Opportunity</p>
                    <p className="text-base font-normal text-gray-600 leading-relaxed">
                        Students are given opportunities to pursue the areas that they are{' '}
                        <span className="text-black">truly passionate</span> about.
                    </p>
                </Card>
            </div>
            <div className="flex w-full md:w-1/3">
                <Card className="bg-white">
                    <p className="text-xl font-bold text-black mb-5">Career Exploration</p>
                    <p className="text-base font-normal text-gray-600 leading-relaxed">
                        Students learn about career options and networking from weekly guest
                        speakers invited from all industries.
                    </p>
                </Card>
            </div>
        </div>
    </section>
)

export default About
