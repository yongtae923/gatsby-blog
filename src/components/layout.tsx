import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './layout.module.css'

type LayoutProps = {
  pageTitle: string,
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
