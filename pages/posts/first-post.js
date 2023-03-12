import Link from "next/link"
import Head from "next/head"
import Layout from "../../components/layout"

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Learning How to Build a Blog With Next.js</title>
      </Head>
      <main>
        <article>
          <h1>Learning How to Build a Blog With Next.js</h1>
          <p>I'm following the best tutorial/documentation on Next/React from Nextjs.org! I've also watched Brad Schiff's YouTube video 'Next.js Tutorial For Beginners', which is also great!</p>
          <p>
            Next has feature called client-side navigation, which is faster than regular browser navigation. By using javascript and loading the full page when navigating. When a <code>Link</code> component is scrolled into view Next will load that page content.
          </p>
          <p>You can only import global css in 'pages/_app.js' as it is a top level component that wraps all other components.</p>

          <p>One of the coolest features so far is image optimaztion out of the box!</p>
        </article>
      </main>
    </Layout>
  )
}
