import { NextPageContext } from 'next'
import React from 'react'

interface Props {
  statusCode: number | null | undefined
}

class Error extends React.Component<Props> {
  static async getInitialProps({ res, err }: NextPageContext) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <p>
        {this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : 'An error occurred on client'}
      </p>
    )
  }
}

export default Error
