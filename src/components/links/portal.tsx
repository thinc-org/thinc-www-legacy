import Image from 'next/image'
import Link from 'next/link'

import { ILinkRecord } from '@/types/links'

interface PortalLinkProps extends ILinkRecord {}

const PortalLink = ({ href, title }: PortalLinkProps) => {
  return (
    <Link href={href} passHref>
      <a>
        <div className="w-full text-sm rounded-full bg-white shadow-md px-6 py-4 text-center hover:bg-gray-100">
          {title}
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
    <section className="w-full min-h-screen flex flex-col bg-pink-100 items-center justify-center relative">
      <div className="mb-2">
        <Image src="/logo.svg" alt="Thinc" className="rounded-full" width={80} height={80} />
      </div>

      <h1 className="text-3xl font-semibold">Thinc.</h1>
      <p>Once a passion, now a profession</p>

      <div className="flex flex-col gap-4 mt-10 w-full px-4 sm:w-96">
        {links.map((link) => {
          return <PortalLink key={link.href} {...link} />
        })}
      </div>
    </section>
  )
}

export default Portal
