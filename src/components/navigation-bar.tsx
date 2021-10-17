import classNames from 'classnames'
import { useEffect, useState } from 'react'

import { WithClassName } from '@/types/common'

const HEIGHT = '60px'

const NavigationBarSpacer: React.FC<WithClassName> = ({ className }) => (
  <div className={classNames('w-full', 'flex', className)} style={{ height: HEIGHT }} />
)

const NavigationBar: React.FC<{ statusCode: number | null | undefined }> = ({ statusCode }) => {
  const [enableShadow, setEnableShadow] = useState(false)
  const handleScroll = () => {
    if (enableShadow) {
      if (window.pageYOffset === 0) {
        setEnableShadow(false)
      }
    } else {
      if (window.pageYOffset > 0) {
        setEnableShadow(true)
      }
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [enableShadow])
  if (statusCode && (statusCode === 404 || statusCode === 500)) {
    return null
  }
  return (
    <>
      <style jsx>{`
        header {
          transition: 0.25s box-shadow cubic-bezier(0.165, 0.84, 0.44, 1);
        }
      `}</style>
      <header
        className={classNames('w-full bg-white fixed top-0 flex items-center z-30', {
          'shadow-2xl': enableShadow,
        })}
        style={{ height: HEIGHT }}
      >
        <div className="container flex flex-row items-baseline justify-between">
          <div className="flex flex-row items-baseline mx-8">
            <a href="#" className="text-xl font-headline font-semibold">
              Thinc.
            </a>
            <div className="hidden">
              <div className="hidden md:flex flex-row items-baseline">
                <a href="#" className="text-xs font-base tracking-widest ml-10">
                  ABOUT
                </a>
                <a href="#" className="text-xs font-base tracking-widest ml-10">
                  PROJECTS
                </a>
                <a href="#" className="text-xs text-gray-600 font-base tracking-widest ml-10">
                  JOIN
                </a>
                <a href="#" className="text-xs text-gray-600 font-base tracking-widest ml-10">
                  ALUMNI
                </a>
              </div>

              <div className="md:hidden flex flex-row items-baseline">
                <a href="#" className="text-xs font-base tracking-widest">
                  EXPAND
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export { NavigationBar, NavigationBarSpacer }
