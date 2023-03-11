import "../styles/global.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }) {
  const router = useRouter()
  return (
    <>
      <header>
        <div>
          <Link href="/">Marcus Hugo</Link>
        </div>
        <nav className="header-nav">
          <ul>
            <li>
              <Link className={router.pathname == "/" ? "active" : ""} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={router.pathname == "/about" ? "active" : ""} href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={router.pathname == "/blog" ? "active" : ""} href="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className={router.pathname == "/contact" ? "active" : ""} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
      <footer>
        <small>Copyright 2023 Marcus Hugo.</small>
        <small> Built with 💗 using Next.js.</small>
      </footer>
    </>
  )
}
