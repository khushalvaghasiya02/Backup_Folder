import { NextResponse } from 'next/server'
import React from 'react'

const middleware = (request) => {
  //   if(request.nextUrl.pathname != '/blog')
  // return (
  //   NextResponse.redirect(new URL ('/blog',request.url))
  // )
}

export default middleware

// export const config = {
//     matcher: ['/shop/:path*','/shop/:path*'],
// }   