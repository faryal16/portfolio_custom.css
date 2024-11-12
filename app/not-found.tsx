import Link from 'next/link'
import React from 'react'

const not_found = () => {
  return (
    <div>
        <h2>Not Found</h2>
        <p>Cloud not find requested resources</p>
        <Link href="/"> Return Home</Link>
    </div>
  )
}

export default not_found