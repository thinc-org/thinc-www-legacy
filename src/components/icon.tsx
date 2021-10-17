import classNames from 'classnames'

import { WithClassName } from '@/types/common'

const Icon: React.FC<WithClassName> = ({ className, children }) => (
  <>
    <style jsx>{`
      div {
        width: 30px;
        height: 30px;
      }
    `}</style>
    <div className={classNames('flex items-center justify-center flex-shrink-0 rounded-full', className)}>
      {children}
    </div>
  </>
)

export default Icon
