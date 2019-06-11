import Card from '../../components/card'

const Teams = () => (
    <section className="w-full bg-gray-100 py-20">
        <div className="container mb-20">
            <div className="mx-8">
                <div className="w-full flex flex-col">
                    <div className="w-full md:w-2/3">
                        <p className="text-4xl font-bold leading-none text-black">Teams</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex items-stretch flex-col md:flex-row">
            <div className="flex w-full md:w-1/3 mb-3 md:mb-0">
                <Card className="bg-white">
                    <p className="text-xl font-bold text-black mb-5">Innovator</p>
                    <p className="text-base font-normal text-gray-600 leading-relaxed">
                        Innovators do various things related to marketing, research and management.
                        They work in collaboration with designers and developers to build a product.
                    </p>
                </Card>
            </div>
            <div className="flex w-full md:w-1/3 mb-3 md:mb-0">
                <Card className="bg-white">
                    <p className="text-xl font-bold text-black mb-5">Designer</p>
                    <p className="text-base font-normal text-gray-600 leading-relaxed">
                        Designers design a product with creativity. They work in collaboration with
                        innovators and developers.
                    </p>
                </Card>
            </div>
            <div className="flex w-full md:w-1/3">
                <Card className="bg-white">
                    <p className="text-xl font-bold text-black mb-5">Developer</p>
                    <p className="text-base font-normal text-gray-600 leading-relaxed">
                        Developers build a product. They work in collaboration with innovators and
                        designers.
                    </p>
                </Card>
            </div>
        </div>
    </section>
)

export default Teams
