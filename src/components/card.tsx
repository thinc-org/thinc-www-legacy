import classNames from 'classnames'

import { WithClassName } from '@/types/common'

const Card: React.FC<WithClassName> = ({ className, children }) => {
  return <div className={classNames('mx-3 w-full p-10 lg:p-15 rounded-lg', className)}>{children}</div>
}

export default Card
