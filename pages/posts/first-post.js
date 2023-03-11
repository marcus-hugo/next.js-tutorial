import Link from "next/link"

export default function FirstPost() {
  return (
    <main>
      <article>
        <h1>Learing how to build a blog with Next.js!</h1>
        <p>I'm following the best tutorial/documentation on Next/React! I've also watched Brad Schiff's YouTube video 'Next.js Tutorial For Beginners', which is also great!</p>
        <p>Next has feature called client-side navigation, which is faster than regular browser navigation. By using javascript and loading the full page when navigating. When a Link component is scrolled into view Next will load that page content.</p>
      </article>
    </main>
  )
}
