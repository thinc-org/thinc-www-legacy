import classNames from 'classnames'

const NavigationButton = ({ className, children }) => (
  <button
    className={classNames(
      'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:underline px-4 py-3 rounded-lg',
      className
    )}
  >
    <div className="flex flex-row items-center">
      <p className="text-sm">{children}</p>
    </div>
  </button>
)

export default NavigationButton
