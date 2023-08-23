export async function nocoDBRequest(path: string): Promise<Response> {
  const requestHeaders: HeadersInit = new Headers()
  requestHeaders.set('xc-auth', `${process.env.NOCODB_AUTH_TOKEN}`)
  requestHeaders.set('xc-token', `${process.env.NOCODB_API_KEY}`)
  requestHeaders.set('Content-Type', 'application/json')

  const res = await fetch(`https://db.thinc.in.th/api/v1/db/data/v1/Core Team/${path}`, {
    headers: requestHeaders,
  })

  return res
}
