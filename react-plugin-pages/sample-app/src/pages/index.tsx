import { Link } from 'react-router-dom'
import type { FC } from 'react'

const index: FC = () => {
  return (
    <div>
      <p>index</p>
      <Link to="/blog">
        blog
      </Link> |
      <Link to="/about">
        about
      </Link> |
    </div>
  )
}

export default index

