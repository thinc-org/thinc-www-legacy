import Card from '../../components/card'

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
                    <div className="w-full flex flex-col">
                        <div className="w-full md:w-2/3">
                            <p className="text-4xl font-bold leading-none text-black">Projects</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-stretch flex-col lg:flex-row mb-20">
                <div className="flex w-full lg:w-1/3 mb-3 lg:mb-0">
                    <Card className="flex flex-col justify-between bg-gray-100">
                        <div className="mb-5">
                            <div
                                className="mb-5 rounded-full bg-gray-200 flex items-center justify-center border product-preview"
                                style={{
                                    backgroundImage:
                                        'url("https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/42/58/6b/42586b05-243c-94a1-6126-0b2a61b6076d/AppIcon-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-9.png/460x0w.jpg")'
                                }}
                            />
                            <p className="text-xl font-bold text-black mb-5">Chula Pop Bus</p>
                            <p className="text-base font-normal text-gray-600 leading-relaxed">
                                Never get lost in Chula again! Chula Pop Bus App helps make
                                navigation through Chulalongkorn University much easier.
                            </p>
                        </div>
                        <div>
                            <button className="bg-black px-4 py-2 rounded text-white text-xs tracking-widest uppercase">
                                DOWNLOAD
                            </button>
                        </div>
                    </Card>
                </div>
                <div className="flex w-full lg:w-1/3 mb-3 lg:mb-0">
                    <Card className="flex flex-col justify-between bg-gray-100">
                        <div className="mb-5">
                            <div className="mb-5 rounded-full bg-gray-200 flex items-center justify-center border product-preview">
                                <span className="text-base text-gray-600 leading-none tracking-widest">
                                    SB
                                </span>
                            </div>
                            <p className="text-xl font-bold text-black mb-5">Starbario</p>
                            <p className="text-base font-normal text-gray-600 leading-relaxed">
                                Do you suffer from ordering Starbucks? Maybe your beverage name is
                                too long? Starbario, the LINE bot, helps make your ordering process
                                easier! Type in your beverage name in Thai and instantly get a
                                Starbucks-formatted name for it.
                            </p>
                        </div>
                        <div>
                            <button className="bg-black px-4 py-2 rounded text-white text-xs tracking-widest uppercase">
                                OPEN IN <span className="font-bold">LINE</span>
                            </button>
                        </div>
                    </Card>
                </div>
                <div className="flex w-full lg:w-1/3">
                    <Card className="flex flex-col justify-between bg-gray-100">
                        <div className="mb-5">
                            <div className="mb-5 rounded-full bg-gray-200 flex items-center justify-center border product-preview">
                                <span className="text-base text-gray-600 leading-none tracking-widest">
                                    OR
                                </span>
                            </div>
                            <p className="text-xl font-bold text-black mb-5">Open Registration</p>
                            <p className="text-base font-normal text-gray-600 leading-relaxed">
                                Reg Chula is one of the best platform on the Internet. Open
                                Registration pushes that further. This platform provides everything
                                you need in order to survive in Chulalongkorn University.
                            </p>
                        </div>
                        <div>
                            <button className="bg-transparent px-4 py-2 rounded text-gray-600 border text-xs tracking-widest uppercase">
                                COMING THIS AUGUST
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
            <div className="container">
                <div className="mx-8">
                    <p className="text-base text-center text-blue-600 leading-none">
                        All Projects ->
                    </p>
                </div>
            </div>
        </section>
    </>
)

export default Projects
