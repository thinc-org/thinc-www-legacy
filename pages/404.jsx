import React from 'react'

class NotFound extends React.Component {
  render() {
    return (
      <div className="text-center flex flex-col items-center">
        <img src="/static/404.jpg" alt={500} />
        <a className="mt-2 text-lg underline" href="/">
          Return to Home
        </a>
      </div>
    )
  }
}

export default NotFound
