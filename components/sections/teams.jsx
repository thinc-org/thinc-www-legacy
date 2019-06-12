import Card from '../../components/card'
import Icon from '../../components/icon'
import { MdLightbulbOutline, MdEdit, MdCode } from 'react-icons/md'

const Teams = () => (
    <section className="w-full bg-gray-100 py-20">
        <div className="container mb-20">
            <div className="mx-8">
                <div className="w-full flex flex-col">
                    <div className="w-full md:w-2/3">
                        <p className="text-4xl font-headline font-bold leading-none text-black">
                            Teams
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-full flex items-stretch flex-col md:flex-row">
            <div className="flex w-full md:w-1/3 mb-3 md:mb-0">
                <Card className="bg-white">
                    <div className="flex flex-row md:flex-col lg:flex-row items-baseline mb-5">
                        <Icon className="text-green-800 bg-green-200 mr-5 mb-0 md:mb-5 lg:mb-0">
                            <MdLightbulbOutline />
                        </Icon>
                        <p className="text-xl font-headline font-bold text-green-600">Innovator</p>
                    </div>
                    <p className="text-base font-normal text-gray-600 leading-relaxed">
                        Innovators do various things related to marketing, research and management.
                        They work in collaboration with designers and developers to build a product.
                    </p>
                </Card>
            </div>
            <div className="flex w-full md:w-1/3 mb-3 md:mb-0">
                <Card className="bg-white">
                    <div className="flex flex-row md:flex-col lg:flex-row items-baseline mb-5">
                        <Icon className="text-pink-800 bg-pink-200 mr-5 mb-0 md:mb-5 lg:mb-0">
                            <MdEdit />
                        </Icon>
                        <p className="text-xl font-headline font-bold text-pink-600">Designer</p>
                    </div>
                    <p className="text-base font-normal text-gray-600 leading-relaxed">
                        Designers design a product with creativity. They work in collaboration with
                        innovators and developers.
                    </p>
                </Card>
            </div>
            <div className="flex w-full md:w-1/3">
                <Card className="bg-white">
                    <div className="flex flex-row md:flex-col lg:flex-row items-baseline mb-5">
                        <Icon className="text-indigo-800 bg-indigo-200 mr-5 mb-0 md:mb-5 lg:mb-0">
                            <MdCode />
                        </Icon>
                        <p className="text-xl font-headline font-bold text-indigo-600">Developer</p>
                    </div>
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
