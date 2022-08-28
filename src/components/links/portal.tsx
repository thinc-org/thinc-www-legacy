import Image from 'next/image'
import Link from 'next/link'

import { ILinkRecord } from '@/types/links'

interface PortalLinkProps extends ILinkRecord {}

const PortalLink = ({ href, title, icon }: PortalLinkProps) => {
  return (
    <Link href={href} passHref>
      <a>
        <div className="w-full flex justify-between items-center relative text-sm rounded-full bg-white shadow-md px-6 py-5 text-center hover:bg-gray-100 transform transition-transform duration-75 hover:scale-105">
          {icon ? <Image src={`/assets/${icon}.svg`} alt={icon} width={32} height={32} /> : <div className="w-8" />}
          <p>{title}</p>
          <div className="w-8" />
        </div>
      </a>
    </Link>
  )
}

interface PortalProps {
  links: ILinkRecord[]
}

const Portal = ({ links }: PortalProps) => {
  return (
    <section className="w-full pt-24 pb-6 min-h-screen h-full flex flex-col bg-pink-100 items-center justify-center relative">
      <div className="mb-2">
        <Image src="/assets/logo.svg" alt="Thinc." className="rounded-full" width={80} height={80} />
      </div>

      <h1 className="text-3xl font-semibold">Thinc.</h1>
      <p>Once a passion, now a profession</p>

      <div className="flex flex-col gap-4 mt-10 w-full px-4 sm:w-96 md:w-128">
        {links.map((link) => {
          return <PortalLink key={link.href} {...link} />
        })}
      </div>
    </section>
  )
}

export default Portal
