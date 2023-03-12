import Link from "next/link"

export default function Blog(props) {
  return (
    <main>
      <h1>Developer Blog</h1>
      <ul>
        <li>
          <article>
            <Link href="posts/first-post">
              <h2>Learning how to build a blog with Next.js</h2>
            </Link>
            <hr />
          </article>
        </li>
        <li>
          <article>
            <h2>Second Static Post Placeholder</h2>
            <p>Real blog post coming soon...</p>
            <hr />
          </article>
        </li>
        <li>
          <article>
            <h2>Third Static Post Placeholder</h2>
            <p>Real blog post coming soon...</p>
            <hr />
          </article>
        </li>
      </ul>
    </main>
  )
}
