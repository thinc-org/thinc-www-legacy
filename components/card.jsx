import classNames from 'classnames'

const Card = ({ className, children }) => {
  return <div className={classNames('mx-3 w-full p-10 lg:p-15 rounded-lg', className)}>{children}</div>
}

export default Card

// try lint staged
